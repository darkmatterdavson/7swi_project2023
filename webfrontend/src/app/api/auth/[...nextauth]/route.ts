import NextAuth, {AuthOptions, Session, User} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {JWT} from "next-auth/jwt";

const authOptions: AuthOptions  = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign-in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials are used to generate a suitable form on the sign-in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@example.com" },
                password: { label: "Password", type: "password" }
            },

            /**
             *
             *              {
             *                 email:  "example@example.com",
             *                 password: "password"
             *              }
             *
             * */
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either an object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                console.log("Credentials: ", credentials?.email, JSON.stringify(credentials));
                const res = await fetch(`${process.env.BACKEND}/login`, {
                    method: 'POST',
                    body: JSON.stringify({"email": credentials?.email.replaceAll("\"", "").trim(), "password": credentials?.password.replaceAll("\"", "").trim()}),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                user.password = undefined;

                // If no error and we have user data, return it
                if (res.ok && user) {
                    /*
                    * {
                    * expires: time,
                    * it: "xajdas"
                    *
                    * }
                    *
                    * */
                    console.log(user);
                    return user;
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    session: {
      maxAge: 60 * 60 * 7,
    },
    callbacks: {
        async jwt({user, token}: {user: User, token: JWT}){
            if(user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }: {session: Session,  token: JWT}) {
            session.user = token.user;
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};