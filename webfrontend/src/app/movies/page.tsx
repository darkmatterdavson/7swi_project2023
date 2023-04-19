import MovieList from "@/components/MovieList/MovieList";

export default function Movies(){
    // @ts-ignore
    return(
        <>
            <div id="page-content">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <h1 className="fw-light mt-4 text-black">List of all movies</h1>
                        </div>
                    </div>
                </div>
            </div>

            <MovieList/>
         </>
    )
}


