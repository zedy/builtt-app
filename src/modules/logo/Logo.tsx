// libs
import { memo } from 'react';

// components
import { Logo } from '@/utils/icons';
import { LOGO_PRIMARY_COLOR, LOGO_TEXT } from '@/utils/consts';

type Props = {
  size: {
    w: number;
    h: number;
    name: string;
  };
};

function LogoComponent({ size }: Props) {
  function getTextSize() {
    switch (size.name) {
      case 'sm':
        return 'text-[6px]';
      case 'lg':
        return 'text-2xl';
      default:
        return 'text-[6px]';
    }
  }

  return (
    <div className="flex flex-col items-end">
      <Logo {...size} c={LOGO_PRIMARY_COLOR} />
      <span
        className={`${getTextSize()}text-gray-500 font-medium font-['PP Neue Montreal'] leading-3 tracking-tight`}
      >
        {LOGO_TEXT}
      </span>
    </div>
  );
}

export default memo(LogoComponent);
