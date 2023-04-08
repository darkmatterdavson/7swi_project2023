package cz.brioh.backend.service;

import cz.brioh.backend.exception.RecordNotFoundException;
import cz.brioh.backend.model.Movie;
import cz.brioh.backend.repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService{

    private MovieRepository movieRepository;

    public MovieServiceImpl(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public Movie create(Movie movie) {
        Movie ret = movieRepository.save(movie);
        return ret;
    }

    @Override
    public Movie get(long id) {
        return movieRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Movie not found."));
    }

    @Override
    public void update(Movie movie){
        Movie movieFromDb = get(movie.getId());
        if(movieFromDb != null){
            movieFromDb.setDescription(movie.getDescription());
            movieFromDb.setThumbnail(movie.getThumbnail());
            movieFromDb.setYear(movie.getYear());
            movieFromDb.setTitle(movie.getTitle());
            movieRepository.save(movieFromDb);
        } else{
            throw new RecordNotFoundException("Movie not found.");
        }
    }

    @Override
    public void delete(long id){
        boolean exists = movieRepository.existsById(id);
        if(exists){
            movieRepository.deleteById(id);
        } else{
            throw new RecordNotFoundException("Movie not found");
        }
    }

    @Override
    public List<Movie> getAll() {
        return movieRepository.findAll();
    }

    @Override
    public List<Movie> search(String title) {
        return movieRepository.findAllByTitleContainsIgnoreCase(title);
    }
}
