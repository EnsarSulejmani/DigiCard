// /api/auth/[...nextauth]/route.jsx
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";
import { compare } from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectMongoDB();

        const { username, password } = credentials;

        const user = await User.findOne({ Username: username });

        if (!user) {
          throw new Error("No user found with the provided username.");
        }

        const isPasswordValid = await compare(password, user.Password);

        if (!isPasswordValid) {
          throw new Error("Password is incorrect.");
        }

        return {
          id: user._id,
          name: user.Username,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/Login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
