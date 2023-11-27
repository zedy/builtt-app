import { Expressionless } from '@/utils/icons';

function NotFound() {
  return (
    <div className="w-full h-full absolute left-0 top-0">
      <div className="flex bg-white justify-center items-center w-full h-full">
        <div className="relative">
          <h1 className="text-gray-900 text-[150px] sm:text-[200px] font-nunito">
            404
          </h1>
          <div className="absolute top-16 sm:top-24 left-[74px] sm:left-[120px] animate-bounce">
            <Expressionless w={120} h={120} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
