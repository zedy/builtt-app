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

const DEFAULT_CLASS = `py-3 w-full rounded-full transition-all font-normal font-['Arial'] leading-none text-lg`;

function Button({
  children,
  onClick,
  variant = ButtonTypes.Primary,
  disabled = false,
  type = 'button',
  ...props
}: Props) {
  let classes;

  if (variant === 'outline') {
    classes = `${DEFAULT_CLASS} bg-transparent border border-gray-900 text-slate-700 hover:bg-slate-300`;
  } else if (variant === 'primary') {
    classes = `${DEFAULT_CLASS} text-white bg-gray-900 hover:bg-gray-700`;
  }

  return (
    <button
      className={classes}
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
