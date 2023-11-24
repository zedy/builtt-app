// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// components
import InputElement, { InputType } from '@/modules/elements/Input.component';
import Button from '@/modules/elements/Button.component';

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
        <div className="w-full mt-12">
          <Button type="submit">Prijavi se na nalog</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
