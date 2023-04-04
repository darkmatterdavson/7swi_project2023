package cz.brioh.backend.repository;

import cz.brioh.backend.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findAllByTitle(String name);
}
