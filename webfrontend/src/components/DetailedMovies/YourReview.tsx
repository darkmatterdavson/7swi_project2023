import useData from "@/lib/useData";
import {Dispatch, FormEvent, SetStateAction} from "react";
import {toast} from "react-toastify";

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
    id: number,
    user: User,
    movie: Movie,
    score: String,
    content: String,
}

const YourReview = ({movieID, userID, openModal}: {movieID: string, userID: string, openModal: Dispatch<SetStateAction<boolean>>}) =>{
    const {data: review, isLoading}: {data: Review, isLoading: boolean, error: string} = useData(`http://localhost:8080/reviews/search/${movieID}/movies/${userID}`);


    const handleDelete = async (reviewID: number) => {
        const res = await fetch(`http://localhost:8080/reviews/${reviewID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log(await res);
        if(!res.ok) {
            //error toast
        }
    }
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
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(review.id)}>🗑️</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ):(
                <>
                    <p>User has not reviewed this film. Add your review.</p>
                    {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addmodal">➕</button>*/}
                    <button className="btn btn-primary" onClick={() => openModal(true)}>➕</button>
                </>
            )
        }
    </>)
}

export default YourReview