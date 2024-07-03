import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "username",
      credentials: {
        username: { label: "username", type: "text", placeholder: "Username" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },

      async authorize(crentials: any) {
        // console.log(crentials);
        return {
          id: "1",
          email: "jack@gmail.com",
          name: "Jack",
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || " ",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session && session.user) session.user.id = token.sub;
      return session;
    },
  },
  pages: { signIn: "/signin" },
};
