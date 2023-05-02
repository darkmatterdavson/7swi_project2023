"use client"
import {useEffect, useState} from "react";
import { Combobox } from "@headlessui/react";
import useData from "@/lib/useData";
import Link from "next/link";

type Movie = {
    id: Number,
    title: String,
    year: Number,
    thumbnail: String,
    description: String,
}

const SearchBox = () => {
    const [input, setInput] = useState<string>()

    const {data, isLoading} = useData(input ? `http://localhost:8080/movies/search/${input}` : "");


    return (
        <Combobox as="div" style={{display: "flex", flexDirection: "column", position: "relative"}}>
            <Combobox.Input onChange={(e) => setInput(e.target.value)} />
            <Combobox.Options className={"list-group list-group-flush"} style={{position: "absolute", top: "32px", width: "100%", display: "block", zIndex: 999}}>
                {!isLoading && data ? data?.map((movie: Movie) => (
                    <Link style={{textDecoration: "none"}} href={`/movies/${movie.id}`}>
                    <Combobox.Option className={"list-group-item bg-dark"} style={{color: "white"}} key={movie.id.toString()} value={movie.title}>
                       <img id={"custom_preview"} style={{maxWidth: 25}} src={movie.thumbnail.toString()} alt="Card image cap"/> {movie.title} ({movie.year.toString()})
                    </Combobox.Option>
                    </Link>
                )) : (<p>No entries</p>)}
            </Combobox.Options>
        </Combobox>
    )
}

export default SearchBox


