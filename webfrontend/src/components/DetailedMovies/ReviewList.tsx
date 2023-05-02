import useData from "@/lib/useData";
import MovieInfo from "@/components/DetailedMovies/MovieInfo";
import {headers} from "next/headers";

type Movie = {
    id: Number,
    title: String,
    year: Number,
    thumbnail: String,
    description: String,
}

type User = {
    id: Number,
    name: String,
    reviews: Review,
}

type Review = {
    id: Number,
    user: User,
    movie: Movie,
    score: String,
    content: String,
}

const ReviewList = ({movieID}: {movieID: string}) =>{
    const {data: reviews, isLoading} = useData(`http://localhost:8080/reviews/search/${movieID}`)

    return(<>
        {(!isLoading && reviews) ?
            (<div className="content">
                {reviews?.map((review: Review) => {
                    return (
                        <>
                            <p key={review.id.toString()}>ID Review: {review.id.toString()} | Content: {review.content} | Score: {review.score.toString()}</p>
                        </>
                    )
                })}
            </div>):(<p>Loading data!</p>)
        }
    </>)
}
export default ReviewList;

