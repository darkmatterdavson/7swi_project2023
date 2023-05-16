import NextAuth, {User, DefaultSession, ISODateString, DefaultUser} from "next-auth"
import {DefaultJWT, JWT} from "next-auth/jwt"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id?: string | null;
            isAdmin?: boolean | null;
        } & DefaultSession["user"] /*{
            id: number;
            email: string;
            image: string;
            //isAdmin: string;
        }*/
        // expires: ISODateString;
    }

    interface User extends DefaultUser {
        id: string;
        name?: string;
        email: string;
        image?: string;
        isAdmin: boolean;
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT extends DefaultJWT {
        user: {
            id?: string | null;
            isAdmin?: boolean | null;
        } & DefaultSession["user"]
        /*{
            id: number;
            email: string;
            image: string;
            //isAdmin: string;
        }*/
    }
}