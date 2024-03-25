import type { Metadata } from 'next';

import ToastProvider from '@/providers/ToastProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'Boilerplate code for a NextJS app',
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
};

export default RootLayout;
