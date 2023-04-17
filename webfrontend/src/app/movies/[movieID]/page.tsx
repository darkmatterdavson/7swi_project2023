type Movie = {
    id: Number,
    year: number,
    thumbnail: string,
    description: string
}

type Review = {
    id: number,
    user: User,
    movie: Movie,
    datePublished: string;
    score: number,
    content: string
}

type User = {
    id: Number,
    name: String,
    password: String,
    email: String
}
const MoviePage = () => {
    const router = useRouter();
    const { gameID } = router.query;

}

export default MoviePage;