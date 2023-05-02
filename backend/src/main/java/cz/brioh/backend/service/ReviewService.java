package cz.brioh.backend.service;

import cz.brioh.backend.model.Review;
import cz.brioh.backend.model.User;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewService {
    Review create(Review review);
    Review get(long id);
    void delete(long id) throws Exception;
    List<Review> findByMovieId(long id);
    Review findByMovieIdAndUserId(long movieId, long userId);
    List<Object[]> findReviewsAndTheirUsersNamesByMovieId(long movieId);

}
