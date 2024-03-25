import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import { AuthOptions } from 'next-auth';
import { getEnv } from '@/helpers/getEnv';

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: getEnv('GOOGLE_CLIENT_ID'),
      clientSecret: getEnv('GOOGLE_CLIENT_SECRET'),
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
