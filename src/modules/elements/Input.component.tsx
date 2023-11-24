// libs
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { get } from 'lodash';
import { forwardRef } from 'react';

// components
import FormError from '@/modules/form/Error.component';

export enum InputType {
  Text = 'text',
  Email = 'email',
  Pass = 'password',
}

type Props = {
  label: string;
  name: string;
  type?: string;
  error: FieldErrors;
  onBlur: () => void;
  onChange: () => void;
};

type FormValues = Props;

function InputElement(
  { onChange, onBlur, name, label, type, error }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div className="w-full bg-transparent mb-4">
      <div className="relative z-1 h-16">
        <input
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder=" "
          className="z-20 w-full py-3 px-0 h-12 bg-transparent text-gray-900 placeholder-transparent
          text-base font-normal font-['Arial'] leading-7 border-0 border-b-[1px] border-neutral-500 appearance-none
          peer focus:outline-none focus:ring-0 focus:border-gray-900"
        />
        <label
          htmlFor={name}
          className="absolute z-10 left-0 -top-3.5 text-neutral-500 text-base font-normal transition-all
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs"
        >
          {label}
        </label>
        {get(error, name) ? (
          <FormError message={get(error[name], 'message') as string} />
        ) : null}
      </div>
    </div>
  );
}

export default forwardRef<
  HTMLInputElement,
  Props & ReturnType<UseFormRegister<FormValues>>
>(InputElement);
