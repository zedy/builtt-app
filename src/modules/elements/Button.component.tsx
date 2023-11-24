// libs
import { memo } from 'react';

export enum ButtonTypes {
  Primary = 'primary',
  Outline = 'outline',
}

type Props = {
  children: JSX.Element | string;
  onClick?: () => void;
  variant?: ButtonTypes;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

function Button({
  children,
  onClick,
  variant = ButtonTypes.Primary,
  disabled = false,
  type = 'button',
  ...props
}: Props) {
  let classname = `text-white py-3 w-full rounded-full bg-gray-900 text-lg
   font-normal font-['Arial'] leading-none transition-all hover:bg-gray-700`;

  if (variant === 'outline') {
    classname = `${classname} bg-transparent border border-gray-900 text-slate-700 hover:bg-slate-300`;
  }

  return (
    <button
      className={classname}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default memo(Button);
