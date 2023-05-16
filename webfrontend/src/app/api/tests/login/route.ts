import {NextResponse} from "next/server";
import {User} from "next-auth";

export async function POST(request: Request) {
    const user: User = {
        id: "1",
        name: undefined,
        email: "example@davson.cz",
        image: undefined,
        isAdmin: false,
    }

    console.log(user);
    return NextResponse.json(user);
}