"use client"
import SearchList from "@/components/MovieList/SearchList";
import useData from "@/lib/useData";

/*export const metadata = {
    title: "Search"
}*/
export default function SearchPage({params, searchParams}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}){
    const { q } = searchParams;
    const {data, isLoading, error} = useData(`http://localhost:8080/movies/search/${q}`)
    console.log(q, data);



    return(
        <>
            <div id="page-content">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <h1 className="fw-light mt-4 text-black">Search</h1>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/> {
                !isLoading && data ?
            <SearchList movies={data}/> : <>Nebylo nic nalezeno</>
        }
        </>
    )
}