"use client"
import React, {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {Label} from "@headlessui/react/dist/components/label/label";
import * as process from "process";
import {Dialog} from "@headlessui/react";
import {useRouter} from "next/navigation";
//import {Modal} from "react-bootstrap";

export default function AddModal({userID, movieID, open, state}: {userID: string, movieID: string, open: boolean, state: Dispatch<SetStateAction<boolean>>}){
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        /*const formData = new FormData(event.currentTarget);
        formData.append("user", );
        formData.append("movie", JSON.stringify(Object.create({"id": movieID})));

        const data = Object.fromEntries(formData.entries());
        console.log(data, JSON.stringify(data));*/
        const data = {
            user: {
                id: userID
            },
            movie: {id: movieID},
            content: event.currentTarget.content.value,
            score: event.currentTarget.score.value,
        }
        console.log(data, JSON.stringify(data));
        const res = await fetch(`http://localhost:8080/reviews`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if(!res.ok) {
            //error toast
        }
        state(false);
    };

    // @ts-ignore

    return(
        <>
            <Dialog open={open} onClose={state}   className="modales">
                <Dialog.Panel className="modales-content">
                    <Dialog.Title className="modales-title">AddReview</Dialog.Title>
                    <form onSubmit={handleSubmit} className="modales-form">
                        <div className="form-outline mb-4">
                            <label className="form-label modal-label" htmlFor="content_form">Content</label>
                            <textarea id="content_form" name="content" className="form-control modal-input" maxLength={255} style={{height: 140, width: 465}} />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label modal-label" htmlFor="score_form">Score</label>
                            <input type="number" id="score_form" name="score" className="form-control modal-input" min="0" max="10" placeholder={"Range: 0 - 10"} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4 modal-button">Add review</button>
                    </form>
                </Dialog.Panel>
            </Dialog>

        </>
    )
}