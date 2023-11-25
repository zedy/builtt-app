// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// components
import InputElement, { InputType } from '@/components/elements/Input.component';
import Button from '@/components/elements/Button.component';

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

const schemaValidation = yup
  .object({
    name: yup.string().required().min(3).max(32),
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
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordVerify: string;
};

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div className="w-full">
      <div className="text-black text-xl font-bold font-['Arial'] leading-normal tracking-tight mb-12">
        Prijavi se na svoj nalog
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <InputElement
          label="Korisničko ime"
          type={InputType.Text}
          error={errors}
          {...register('name', { required: true })}
        />
        <InputElement
          label="E-mail adresa"
          type={InputType.Email}
          error={errors}
          {...register('email', { required: true })}
        />
        <InputElement
          label="Upišite šifru"
          type={InputType.Pass}
          error={errors}
          {...register('password', { required: true })}
        />
        <InputElement
          label="Potvrdite šifru"
          type={InputType.Pass}
          error={errors}
          {...register('passwordVerify', { required: true })}
        />
        <div className="w-full mt-12">
          <Button type="submit">Potvrdi</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
