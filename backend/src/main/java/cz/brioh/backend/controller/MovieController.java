package cz.brioh.backend.controller;

import cz.brioh.backend.model.Movie;
import cz.brioh.backend.service.MovieService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class MovieController {

    private MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @PostMapping("/movies")
    public Movie create(@Valid @RequestBody Movie movie){
        return movieService.create(movie);
    }

    @GetMapping("/movies")
    public List<Movie> getAll(){
        return movieService.getAll();
    }

    @GetMapping("/movies/{id}")
    public Movie get(@PathVariable("id") long id){
        return movieService.get(id);
    }

    @GetMapping("/movies/search/{name}")
    public List<Movie> search(@PathVariable("name") String name){
        return movieService.search(name);
    }

}
