// libs
import { useWindowSize } from 'usehooks-ts';

// components
import Login from '@/components/login/Login';
import Signup from '@/components/signup/Signup';
import LogoComponent from '@/components/logo/Logo';
import { LOGO_SIZE_LG, LOGO_SIZE_MD } from '@/utils/consts';
import { ModalContextProvider } from '@/context/modalContext';
import LanguageSwitcher from '../layout/nav/LanguageSwitcher';
import WithLink from '../elements/withLink';

function HomePage() {
  const { width } = useWindowSize();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center lg:flex-row lg:items-center">
      <div className="absolute top-6 left-0">
        <LanguageSwitcher />
      </div>
      <div className="w-full sm:w-1/2 flex justify-center mb-20 lg:mb-0">
        <WithLink href="/">
          <LogoComponent size={width > 640 ? LOGO_SIZE_LG : LOGO_SIZE_MD} />
        </WithLink>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col items-center">
        <div className="px-4 relative bg-white md:px-0 w-full max-w-[420px] sm:min-w-[420px]">
          <ModalContextProvider>
            <Login />
            <Signup />
          </ModalContextProvider>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
