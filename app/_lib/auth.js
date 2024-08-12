import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// const authConfig = {
//   providers: Google({
//     clientId: process.env.AUTH_GOOGLE_ID,
//     clientSecret: process.env.AUTH_GOOGLE_SECRET,
//   }),
// };

export const { auth, handlers } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
});
