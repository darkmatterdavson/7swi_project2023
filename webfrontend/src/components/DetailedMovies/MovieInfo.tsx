"use client";
import {router} from "next/client";
import useData from "@/lib/useData";
import {useRouter} from "next/router";
import {json} from "stream/consumers";

type Movie = {
    id: Number,
    title: String,
    year: Number,
    thumbnail: String,
    description: String,
}

const MovieInfo = ({movieID}: {movieID: string}) =>{
    const {data: movie, isLoading}: {data: Movie, isLoading: boolean, error: string} = useData(`http://localhost:8080/movies/${movieID}`);

    return(<>
        {(!isLoading && movie) ?

            (<div className="content">
            <div className="row">
                <div className="col-md-6">
                    <figure className="movie-poster"><img style={{maxWidth: 300}} src={movie.thumbnail.toString()} alt="#"/></figure>
                </div>
                <div className="col-md-6 ">
                    <h2 className="movie-title">{movie.title} ({movie.year.toString()})</h2>
                    <div className="movie-summary">
                        <p>{movie.description}</p>
                    </div>
                </div>
            </div>
            </div>):(<p>Loading data!</p>)
        }
    </>)
}
export default MovieInfo;