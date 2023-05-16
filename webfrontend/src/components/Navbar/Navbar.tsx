"use client"
import Link from "next/link";
import {FormEvent, useState} from "react";
import SearchBox from "@/components/SearchBox";
import {signOut, useSession} from "next-auth/react";

/*const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.search.value);
}*/
export default function Navbar(){
    const {data: session, status} = useSession();
    //const [userIsLogged, setUserIsLogged] = useState<boolean>(props.isLogged);
    //const [search, setSearch] = useState<string>();

    function displayStuff(){
         return (<>{
             (session && status) ? (<li className="nav-item">
                 {/*<Link className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#logoutmodal">Log
                     out</Link>*/}
                 <button className="nav-link" onClick={() => signOut()}>Logout</button>
             </li>) : (<li className="nav-item">
                 <button className="nav-link" data-bs-toggle="modal" data-bs-target="#loginmodal">Login</button>
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