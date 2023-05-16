"use client"
import React, {FormEvent} from "react";
import {Nav, Tabs} from "react-bootstrap";
import {mockProviders} from "next-auth/client/__tests__/helpers/mocks";
import email_1 = mockProviders.email_1;
import useData from "@/lib/useData";
import {signIn, useSession} from "next-auth/react";


async function LoginOperation(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    const loginData = new FormData(event.currentTarget)
    const login = Object.fromEntries(loginData.entries());
    const {email, password} = login;
    const res = await signIn("credentials",{ email: JSON.stringify(email), password: JSON.stringify(password)})
    console.log( res?.ok);
}


 export default function LoginModal(){
    const {data: session} = useSession();
    console.log(session);
    return(
        <>
            <div className="modal fade" id="loginmodal" tabIndex={-1} role="dialog"
                 aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle"> Sign in </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form name={"loginForm"} onSubmit={LoginOperation} method={"post"}>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="email" >Email address</label>
                                    <input type="email" id="email" name="email" className="form-control" required={true}/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" className="form-control" required={true}/>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                                <div className="text-center">
                                    <p>Not a member? <a href="/register">Register</a></p>
                                </div>
                            </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}