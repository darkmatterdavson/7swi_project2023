"use client"
import { useRouter } from 'next/router'
import useData from "@/lib/useData";
import MovieInfo from "@/components/DetailedMovies/MovieInfo";
import ReviewList from "@/components/DetailedMovies/ReviewList";
import ReviewOperations from "@/components/DetailedMovies/ReviewOperations";

const MoviePage = ({ params }:{params:{movieID:string}}) =>{
    const {movieID} = params;

    return(
        <>
            <div style={{marginTop: 10, marginLeft: "20%", marginRight: "20%"}}>
                <MovieInfo movieID={movieID}/>
                <h5 className="fw-light mt-4 text-black">Operations:</h5>
                <ReviewOperations/>

                <h5 className="fw-light mt-4 text-black">Your review:</h5>
                BBBBLL

                <h5 className="fw-light mt-4 text-black">All reviews</h5>
                <ReviewList movieID={movieID}/>
            </div>
        </>
        )

}
export default MoviePage;