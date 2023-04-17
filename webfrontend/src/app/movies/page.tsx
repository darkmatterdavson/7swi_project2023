export const metadata = {
    title: "All movies"
}

type Movie = {
    id: Number,
    title: string,
    year: number,
    thumbnail: string,
    description: string
}

const Movies = () =>{
    /*const fetcher = (...args: [ url: string, init: RequestInit ]) => fetch(...args).then(res => res.json());
    const {data: games, error} = useSWR("http://localhost:8090/game/all", fetcher, {refreshInterval: 60000});*/
    return(<>

    </>);
}

export default Movies;


