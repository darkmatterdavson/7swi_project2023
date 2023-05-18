import useData from "@/lib/useData";
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

const ReviewList = ({movieID, isAdmin}: {movieID: string, isAdmin: boolean}) =>{
    const {data: reviews, isLoading} = useData(`http://localhost:8080/movies/${movieID}/reviews`)

    console.log(reviews);
    const handleAdminDelete = async (reviewID: number) => {
        const res = await fetch(`http://localhost:8080/reviews/${reviewID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log(await res);
        if(!res.ok) {
            //error toast
            toast("[Admin] Recenze nebyla odstraněna.");
        }
        toast("[Admin] Recenze byla odstraněna. (Refreshěte stránku)");
    }
    return(<>
        {!isLoading && reviews ?
            <div className="content">
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
                            {/*@ts-ignore*/}
                            <tr key={review[0].id.toString()}>
                                <td>
                                    <img id={"user_image"} style={{maxWidth: 35}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIzLd2AEYnEMBJWAhnZH5Gg9txQdwWZLVxQ&usqp=CAU"} alt="user_profile_name"/>
                                    {/*@ts-ignore*/}
                                    {review[1]}
                                </td>
                                <td>
                                    {/*@ts-ignore*/}
                                    {review[0].content}
                                </td>
                                <td>
                                    {/*@ts-ignore*/}
                                    {review[0].score}
                                </td>

                                { (isAdmin) ? (
                                <td>
                                    {/*@ts-ignore*/}
                                    <button type="button" className="btn btn-danger" onClick={() => handleAdminDelete(review[0].id)}>🗑️</button>
                                </td>
                                ) : (
                                    <>
                                        {console.log("[DEBUG] You are not ADMIN!")}
                                    </>
                                    )}
                            </tr>
                        </>

                    )
                })}
                    </tbody>
                </table>
            </div>:<p>Loading data!</p>
        }
    </>)
}
export default ReviewList;

