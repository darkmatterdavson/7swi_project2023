import Link from "next/link";
import LoginModal from "@/components/Modal/Login";
import {useState} from "react";
export default function Navbar(){

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" href="#">📺 Movie Reviews</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/movies">Browse movies</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex m-lg-auto">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search movie" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button className="nav-link">Login</button>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Log out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}