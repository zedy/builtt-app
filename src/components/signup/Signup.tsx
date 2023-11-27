// libs
import { get } from 'lodash';

// components
import { Modal, useModal } from '@/hooks/useModal';
import Button, { ButtonTypes } from '@/components/elements/Button.component';
import SignUpForm from './SignUpForm';
import ButtonDivider from '@/components/elements/Divider.component';
import { Google } from '@/utils/icons';

// firebase
import { signInWithGooglePopup } from '@/utils/firebase/firebase.utils';
import { useStore } from '@/store';
import { TRANSLATIONS } from '@/utils/consts';

function Signup() {
  const { closeModal, openModal, modalProps } = useModal();
  const lang = useStore((store) => store.currentLanguage);
  const localT = get(TRANSLATIONS, '/login');

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <>
      <Modal {...modalProps} title={get(localT.form.modalTitle, lang)}>
        <div className="m-auto">
          <SignUpForm callback={closeModal} />
        </div>
      </Modal>
      <div className="mt-5 w-full">
        <ButtonDivider />
        <Button variant={ButtonTypes.Outline} onClick={openModal}>
          {get(localT.button.create, lang)}
        </Button>
        <Button variant={ButtonTypes.Google} onClick={signInWithGoogle}>
          <>
            <Google w={23} h={23} />
            <span className="pl-2">{get(localT.button.google, lang)}</span>
          </>
        </Button>
      </div>
    </>
  );
}

export default Signup;
