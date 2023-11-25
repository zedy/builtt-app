/* eslint-disable jsx-a11y/no-static-element-interactions */
// libs
import { useContext, useEffect, useState } from 'react';

// contexts
import { ModalContext } from '@/context/modalContext';
import { Cross } from '@/utils/icons';

type ModalProps = {
  children: JSX.Element;
  closeModal: () => void;
  open: boolean;
  title?: string;
  closeOnBgClick?: boolean; // close modal when user clicks outside of modal
  modalCloseCallback?: () => void | undefined; // perform action when modal is closed
};

export function Modal({
  children,
  closeModal = () => undefined,
  open = false,
  title = undefined,
  closeOnBgClick = true,
  modalCloseCallback = undefined,
}: ModalProps) {
  const { isLoading } = useContext(ModalContext);

  if (!open) {
    return null;
  }

  // call the callback fn we passed as a prop when we close the modal
  const onClickModalCloseCallback = () => {
    if (modalCloseCallback) modalCloseCallback();
    closeModal();
  };

  // call the callback fn we passed as a prop when we close the modal
  const onKeyupModalCloseCallback = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code === 'Escape') {
      onClickModalCloseCallback();
    }
  };

  return (
    <div
      className="modal fixed w-screen h-screen z-30 top-0 left-0"
      style={{ display: open ? 'block' : 'none' }}
    >
      <div
        onClick={closeOnBgClick ? onClickModalCloseCallback : undefined}
        onKeyUp={closeOnBgClick ? onKeyupModalCloseCallback : undefined}
        className="cursor-pointer bg-slate-700 opacity-50 absolute w-full h-full"
      />
      <div className="bg-slate-100 rounded-xl w-[calc(100%-20px)] sm:w-[480px] min-h-[150px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="relative h-full z-50">
          {isLoading ? (
            <div className="absolute h-full w-full bg-slate-800 opacity-75 z-40">
              loading
            </div>
          ) : (
            <div />
          )}
          <div className="flex justify-between border-b border-slate-400 p-5">
            <div className="flex items-center">
              <span
                onClick={onClickModalCloseCallback}
                onKeyUp={onKeyupModalCloseCallback}
                className="cursor-pointer"
              >
                <Cross w={23} h={23} c="#000" />
              </span>
              {title ? (
                <h3 className="ml-5 text-lg">
                  <b>{title}</b>
                </h3>
              ) : null}
            </div>
          </div>
          <div className="min-h-[150px] p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export const useModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (open) {
        document.body.classList.add('disable-scroll');
      } else {
        document.body.classList.remove('disable-scroll');
      }
    }

    return () => {
      if (typeof document !== 'undefined')
        document.body.classList.remove('disable-scroll');
    };
  }, [open]);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  const modalProps = {
    open,
    closeModal,
  };

  return { closeModal, openModal, toggleModal, modalProps };
};
