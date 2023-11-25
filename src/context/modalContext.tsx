import React, { useMemo, useState } from 'react';

type ContextProps = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const initialContext = {} as ContextProps;

export const ModalContext = React.createContext(initialContext);

export function ModalContextProvider({ children }: ProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const provide: ContextProps = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading]
  );

  return (
    <ModalContext.Provider value={provide}>{children}</ModalContext.Provider>
  );
}
