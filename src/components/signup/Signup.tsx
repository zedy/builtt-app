// components
import { Modal, useModal } from '@/hooks/useModal';
import Button, { ButtonTypes } from '@/components/elements/Button.component';
import SignUpForm from './SignUpForm';
import ButtonDivider from '@/components/elements/Divider.component';
import { Google } from '@/utils/icons';

// firebase
import { signInWithGooglePopup } from '@/utils/firebase/firebase.utils';

function Signup() {
  const { closeModal, openModal, modalProps } = useModal();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <>
      <Modal {...modalProps} title="Kreiranje naloga">
        <div className="m-auto">
          <SignUpForm callback={closeModal} />
        </div>
      </Modal>
      <div className="mt-5 w-full">
        <ButtonDivider />
        <Button variant={ButtonTypes.Outline} onClick={openModal}>
          Napravite nalog
        </Button>
        <Button variant={ButtonTypes.Google} onClick={signInWithGoogle}>
          <>
            <Google w={23} h={23} />
            <span className="pl-2">Prijava preko Google naloga</span>
          </>
        </Button>
      </div>
    </>
  );
}

export default Signup;
