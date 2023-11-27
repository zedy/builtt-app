/* eslint-disable @typescript-eslint/ban-ts-comment */
// libs
import { get } from 'lodash';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// components
import InputElement, { InputType } from '@/components/elements/Input.component';
import Button from '@/components/elements/Button.component';
import { signInAuthUserWithEmailAndPassword } from '@/utils/firebase/firebase.utils';
import { useStore } from '@/store';
import { TRANSLATIONS } from '@/utils/consts';

const schemaValidation = yup
  .object({
    email: yup.string().email().required().min(8).max(64),
    password: yup.string().required().max(64),
  })
  .required();

type FormData = {
  email: string;
  password: string;
};

function Login() {
  const lang = useStore((store) => store.currentLanguage);
  const localT = get(TRANSLATIONS, '/login');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;
    await signInAuthUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-full">
      <div className="text-black text-xl font-bold leading-normal tracking-tight mb-12">
        {get(localT.h1, lang)}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* @ts-ignore | @see comment in input.component */}
        <InputElement
          label={get(localT.form.email, lang)}
          type={InputType.Email}
          error={errors}
          {...register('email', { required: true })}
        />
        {/* @ts-ignore | @see comment in input.component */}
        <InputElement
          label={get(localT.form.pass, lang)}
          type={InputType.Pass}
          error={errors}
          {...register('password', { required: true })}
        />
        <div className="w-full mt-12">
          <Button type="submit">{get(localT.button.signin, lang)}</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
