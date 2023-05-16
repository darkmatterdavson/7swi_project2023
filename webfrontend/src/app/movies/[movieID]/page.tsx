"use client"
import MovieInfo from "@/components/DetailedMovies/MovieInfo";
import ReviewList from "@/components/DetailedMovies/ReviewList";
import YourReview from "@/components/DetailedMovies/YourReview";

const MoviePage = ({ params }:{params:{movieID:string}}) =>{
    const {movieID} = params;

    let isLogged = true;
    return(
        <>
            <div style={{marginTop: 10, marginLeft: "20%", marginRight: "20%"}}>
                <MovieInfo movieID={movieID}/>

                { (isLogged) ? (
                    <>
                        <h5 className={"fw-light mt-4 text-black"}>Your review:</h5>
                        <YourReview movieID={movieID} userID={"3"}/>
                        </>
                    ) : (<>
                            {console.log("[DEBUG] You are not logged in to view your review")}
                        </> )
                }
                <h5 className="fw-light mt-4 text-black">All reviews</h5>
                <ReviewList movieID={movieID}/>
            </div>
        </>
        )

}
export default MoviePage;