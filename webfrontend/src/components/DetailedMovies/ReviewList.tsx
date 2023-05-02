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
    const {data: reviews, isLoading} = useData(`http://localhost:8080/movies/${movieID}/reviews`)

    return(<>
        {(!isLoading && reviews) ?
            (<div className="content">
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Commentary</th>
                        <th scope="col">Score</th>
                    </tr>
                    </thead>
                    <tbody>
                {reviews?.map((review: Review) => {
                    return (
                        <>
                            <tr key={review[0].id.toString()}>
                                <td>
                                    <img id={"user_image"} style={{maxWidth: 35}} src={"https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"} alt="user_profile_name"/>
                                    {review[1]}
                                </td>
                                <td>
                                    {review[0].content}
                                </td>
                                <td>
                                    {review[0].score.toString()}
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </>

                    )
                })}
                    </tbody>
                </table>
            </div>):(<p>Loading data!</p>)
        }
    </>)
}
export default ReviewList;

