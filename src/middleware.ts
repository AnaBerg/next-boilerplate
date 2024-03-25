import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      const sessionToken = req.cookies.get('next-auth.session-token');

      if (sessionToken) {
        return true;
      }

      const sessionTokenProd = req.cookies.get(
        '__Secure-next-auth.session-token'
      );

      if (sessionTokenProd) {
        return true;
      }

      return false;
    },
  },
});

export const config = {
  matcher: '/private/:path*',
};
