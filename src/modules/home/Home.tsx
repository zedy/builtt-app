// components
import Login from '@/modules/login/LoginPage';
import Signup from '@/modules/signup/Signup';
import LogoComponent from '@/modules/logo/Logo';
import { LOGO_SIZE_LG } from '@/utils/consts';

function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center lg:flex-row lg:items-center">
      <div className="w-1/2 flex justify-center mb-20 lg:mb-0">
        <LogoComponent size={LOGO_SIZE_LG} />
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <div className="px-4 relative bg-white md:px-0 max-w-[420px] min-w-[420px]">
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default Home;
