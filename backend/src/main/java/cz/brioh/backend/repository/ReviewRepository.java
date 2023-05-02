package cz.brioh.backend.repository;

import cz.brioh.backend.model.Review;
import cz.brioh.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllById(long id);
    List<Review> findAllByMovie_Id(long id);
    Review findByMovie_IdAndUser_id(long movieId, long userId);
    @Query("SELECT r, r.user.name FROM Review r JOIN r.movie m WHERE m.id = :movieId")
    List<Object[]> findReviewsAndTheirUsersNamesByMovieId(@Param("movieId") long movieId);
}
