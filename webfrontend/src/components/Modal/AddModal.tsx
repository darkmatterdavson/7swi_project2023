"use client"
import React from "react";
import {Nav, Tabs} from "react-bootstrap";
import {Label} from "@headlessui/react/dist/components/label/label";

export default function AddModal(){
    return(
        <>
            <div className="modal fade" id="addmodal" tabIndex={-1} role="dialog"
                 aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle"> Add new review </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="content_form">Content</label>
                                        <textarea id="content_form"  className="form-control" maxLength={255} style={{height: 140, width: 465}}/>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="score_form">Score</label>
                                        <input type="number" id="score_form" className="form-control" min="0" max="10" placeholder={"Range: 0 - 10"}/>
                                    </div>

                                    <button type="button" className="btn btn-primary btn-block mb-4">Add review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}