"use client"
import Link from "next/link";
import LoginModal from "@/components/Modal/Login";
import {FormEvent, useState} from "react";
import LoginAlt from "@/components/Modal/LoginAlt";
import {FormData} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import {redirect} from "next/navigation";
import {NextResponse} from "next/server";
import SearchBox from "@/components/SearchBox";

/*const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.search.value);
}*/
export default function Navbar(props: {isLogged: boolean }){
    const [userIsLogged, setUserIsLogged] = useState<boolean>(props.isLogged);
    //const [search, setSearch] = useState<string>();

    function displayStuff(){
         return (<>{
             userIsLogged ? (<li className="nav-item">
                 <Link className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModalLong">Log
                     out</Link>
             </li>) : (<li className="nav-item">
                 <button className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModalLong">Login</button>
             </li>)
         }</>);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" href="#">📺 Movie Reviews</Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/movies">Browse movies</Link>
                        </li>
                    </ul>
                    <div style={{margin: "auto"}}>
                        <SearchBox  />
                    </div>

                    <ul className="navbar-nav ms-auto">
                        {displayStuff()}
                    </ul>
                </div>
            </nav>
        </>
    )
}