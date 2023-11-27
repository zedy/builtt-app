/* eslint-disable @typescript-eslint/ban-ts-comment */
// libs
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { get } from 'lodash';
import { FirebaseError } from '@firebase/util';

// components
import { User, UserCredential } from 'firebase/auth';
import InputElement, { InputType } from '@/components/elements/Input.component';
import Button from '@/components/elements/Button.component';
import { ModalContext } from '@/context/modalContext';

// firebase
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '@/utils/firebase/firebase.utils';
import { useStore } from '@/store';
import { TRANSLATIONS } from '@/utils/consts';

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

const schemaValidation = yup
  .object({
    role: yup.string().required(),
    displayName: yup.string().required().min(3).max(32),
    email: yup.string().email().required().min(8).max(64),
    password: yup
      .string()
      .required()
      .min(8)
      .max(16)
      .trim()
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
    passwordVerify: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();

type FormData = {
  role: string;
  displayName: string;
  email: string;
  password: string;
  passwordVerify: string;
};

type Props = {
  callback: () => void;
};

function SignUpForm({ callback }: Props) {
  const lang = useStore((store) => store.currentLanguage);
  const localT = get(TRANSLATIONS, '/login');
  const { setIsLoading } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const { email, displayName, password, role } = data;
      const userAuth: UserCredential | undefined =
        await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(userAuth?.user as User, {
        displayName,
        role,
      });

      callback();
    } catch (error: unknown) {
      if (
        error instanceof FirebaseError &&
        error.code === 'auth/email-already-in-use'
      ) {
        toast.error('Cannot create user, email already in use');
        setError('email', { type: 'custom', message: 'E-mail već postoji!' });
      } else {
        toast.error('User creation encountered an error');
      }

      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <input
          type="hidden"
          defaultValue="user"
          {...register('role', { required: true })}
        />
        {/* @ts-ignore | @see comment in input.component */}
        <InputElement
          label={`${get(localT.form.name, lang)} *`}
          type={InputType.Text}
          error={errors}
          {...register('displayName', {
            required: get(localT.form.required, lang),
          })}
        />
        {/* @ts-ignore | @see comment in input.component */}
        <InputElement
          label={`${get(localT.form.email, lang)} *`}
          type={InputType.Email}
          error={errors}
          {...register('email', { required: get(localT.form.required, lang) })}
        />
        {/* @ts-ignore | @see comment in input.component */}
        <InputElement
          label={`${get(localT.form.pass, lang)} *`}
          type={InputType.Pass}
          error={errors}
          {...register('password', {
            required: get(localT.form.required, lang),
          })}
        />
        {/* @ts-ignore | @see comment in input.component */}
        <InputElement
          label={`${get(localT.form.passV, lang)} *`}
          type={InputType.Pass}
          error={errors}
          {...register('passwordVerify', {
            required: get(localT.form.required, lang),
          })}
        />
        <div className="w-full mt-12">
          <Button type="submit">{get(localT.button.modal, lang)}</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
