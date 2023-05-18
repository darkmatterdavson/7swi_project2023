"use client"
import MovieInfo from "@/components/DetailedMovies/MovieInfo";
import ReviewList from "@/components/DetailedMovies/ReviewList";
import YourReview from "@/components/DetailedMovies/YourReview";
import {useSession} from "next-auth/react";
import AddModal from "@comps/Modal/AddModal";
import {useState} from "react";

const MoviePage = ({ params }:{params:{movieID:string}}): JSX.Element =>{
    const {movieID} = params;
    const {data: session, status} = useSession();

    console.log(session?.user, status);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //let isLogged = true;
    return(
        <>
            <div style={{marginTop: 10, marginLeft: "20%", marginRight: "20%"}}>
                <MovieInfo movieID={movieID}/>
                <AddModal userID={session?.user.id!} movieID={movieID} open={show} state={handleClose}/>

                { (session && status) ? (
                    <>
                        <h5 className={"fw-light mt-4 text-black"}>Your review:</h5>
                        <YourReview movieID={movieID} userID={session.user.id!} openModal={setShow}/>
                        </>
                    ) : (<>
                            {console.log("[DEBUG] You are not logged in to view your review")}
                        </> )
                }
                <h5 className="fw-light mt-4 text-black">All reviews</h5>
                <ReviewList movieID={movieID} isAdmin={session?.user.admin!}/>
            </div>
        </>
        )

}
export default MoviePage;