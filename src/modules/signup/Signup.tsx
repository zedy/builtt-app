// components
import Button, { ButtonTypes } from '@/modules/elements/Button.component';

function Signup() {
  const openModal = () => console.log('hello');

  return (
    <div className="mt-5 w-full">
      <div className="flex justify-between items-center mb-5">
        <span className="w-1/2 h-[1px] bg-gray-700" />
        <span className="px-5">ili</span>
        <span className="w-1/2 h-[1px] bg-gray-700" />
      </div>
      <Button variant={ButtonTypes.Outline} onClick={openModal}>
        Napravite nalog
      </Button>
    </div>
  );
}

export default Signup;
