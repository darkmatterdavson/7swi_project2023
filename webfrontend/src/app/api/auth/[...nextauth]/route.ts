import NextAuth, {Session, User} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {JWT} from "next-auth/jwt";

const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
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
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const res = await fetch(`${process.env.NEXTAUTH_URL}/api/tests/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

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
                    console.log(user, JSON.stringify(user));
                    return user
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
            //token.user.isAdmin = user.isAdmin;
            token.user = user;
            return token;
        },
        async session({ session, token }: {session: Session,  token: JWT}) {
            //session.user.isAdmin = token.user.isAdmin;
            // SESSION DON'T CONTAIN ANY RELEVANT INFO
            session.user = token.user;
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };