import useData from "@/lib/useData";

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

const YourReview = ({movieID, userID}: {movieID: string, userID: string}) =>{
    const {data: review, isLoading}: {data: Review, isLoading: boolean, error: string} = useData(`http://localhost:8080/reviews/search/${movieID}/movies/${userID}`);

    return(<>
        {(!isLoading && review) ?
            (
                <table className="table">
                    <thead className="thead-light">
                    </thead>
                    <tbody>
                        <tr key={review.id.toString()}>
                            <td>
                                {review.content}
                            </td>
                            <td>
                                {review.score.toString()}
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deletemodal">🗑️</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ):(
                <>
                    <p>User has not reviewed this film. Add your review.</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addmodal">➕</button>
                </>
            )
        }
    </>)
}

export default YourReview