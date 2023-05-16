import {NextRequest, NextResponse} from "next/server";
import {getSession} from "next-auth/react";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
    const session = await getSession({request})

    if(session) {
        console.log("Session Established")
        return NextResponse.json(session);
    }
    console.log("No Session")
    return NextResponse.json(session);
}