"use client"
import {useEffect, useState} from "react"
import {any, number, string} from "prop-types";
import Link from "next/link";
import {GetStaticProps, InferGetServerSidePropsType} from "next";
import useSWR from "swr";
import useData from "@/lib/useData";

type Movie = {
    id: Number,
    title: String,
    year: Number,
    thumbnail: String,
    description: String,
}

const Movies = () =>{
    const {data: movies, error} = useData("http://localhost:8080/movies");
    return(<>
            <div className={"row justify-content-center mx-0"}>
                {movies?.map((movie: Movie) => {
                    return (
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src={movie.thumbnail.toString()} width={70} alt="Card image cap"/>
                            <div className="card-body">
                                <Link key={movie.id.toString()} href={"/movies/"+ movie.id}>
                                    <h5 className="card-title">{movie.title} ({movie.year.toString()})</h5>
                                </Link>
                                <p className="card-text">{movie.description}</p>
                            </div>
                        </div>
                    )
            })}
            </div>
        </>)
}

export default Movies;