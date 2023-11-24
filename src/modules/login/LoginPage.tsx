// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// components
import InputElement, { InputType } from '@/modules/elements/Input.component';

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

function LoginPage() {
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
    <div className="relative w-screen h-screen bg-white flex justify-center items-center">
      <div className="px-4 md:px-0 max-w-[420px] w-full">
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
            <button
              className="text-white py-3 w-full rounded-full bg-gray-900 text-lg font-normal 
              font-['Arial'] leading-none transition-all hover:bg-gray-700"
              type="submit"
            >
              Prijavi se na nalog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
