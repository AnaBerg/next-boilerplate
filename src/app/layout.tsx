import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'Boilerplate code for a NextJS app',
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
