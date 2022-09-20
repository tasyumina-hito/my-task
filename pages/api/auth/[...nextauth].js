
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log('サインイン');
            return true;
        },
    },
});
