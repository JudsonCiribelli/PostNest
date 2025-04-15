import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }) {
        if (!email || !password) return null;
        const user = await prisma.user.findUnique({
          where: { email: email as string },
        });
        if (!user || !user.password) return null;
        const isPasswordValid = await bcrypt.compare(
          password as string,
          user.password,
        );
        if (!isPasswordValid) return null;
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user }) {
      if (user?.id) {
        session.user.id = user.id; // Passa o ID do usuário para a sessão
      }
      return session;
    },
  },
});
