package cz.brioh.backend.service;

import cz.brioh.backend.model.Movie;

import java.util.List;

public interface MovieService {
    Movie create(Movie movie);
    Movie get(long id);
    void update(Movie movie) throws Exception;
    void delete(long id) throws Exception;
    List<Movie> getAll();
    List<Movie> search(String title);
}
