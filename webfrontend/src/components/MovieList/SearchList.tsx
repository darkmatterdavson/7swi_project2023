"use client"
import {useEffect, useState} from "react"
import {any, number, string} from "prop-types";
import Link from "next/link";
import {GetStaticProps, InferGetServerSidePropsType} from "next";
import useSWR from "swr";
import useData from "@/lib/useData";
import Image from "next/image";

type Movie = {
    id: Number,
    title: String,
    year: Number,
    thumbnail: String,
    description: String,
}

const SearchMovies = ({movies}: {movies: Movie[]}) =>{
    return(<>

            (<div className={"row justify-content-center mx-0"}>
                {movies?.map((movie: Movie) => {
                    return (
                        <div className="card" key={movie.id.toString()} style={{width: '18rem'}}>
                            <img className="card-img-top" id={"custom_thumbmail"} style={{maxWidth: 300}} src={movie.thumbnail.toString()} alt="Card image cap"/>
                            <div className="card-body">
                                <Link key={movie.id.toString()} href={"/movies/"+ movie.id}>
                                    <h5 className="card-title">{movie.title} ({movie.year.toString()})</h5>
                                </Link>
                                <p className="card-text">{movie.description}</p>next
                            </div>
                        </div>
                    )
                })}
            </div>)
    </>)
}

export default SearchMovies