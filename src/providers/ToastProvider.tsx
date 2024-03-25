'use client';

import { Toast } from '@/components';
import { createContext, useState } from 'react';

type ToastContextType = {
  openToast: (text: string, type?: TypeToast) => void;
};

type TypeToast = 'alert' | 'success' | 'error';

type Toast = {
  text: string;
  type: TypeToast;
};

const ToastContext = createContext<ToastContextType>({ openToast: () => {} });

const ToastProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [toast, setToast] = useState<Toast>({ text: '', type: 'alert' });
  const [open, setOpen] = useState<boolean>(false);

  const openToast = (text: string, type: TypeToast = 'alert') => {
    setToast({ text, type });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ToastContext.Provider value={{ openToast }}>
      {open && (
        <Toast text={toast.text} handleClose={handleClose} type={toast.type} />
      )}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
