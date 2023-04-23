package cz.brioh.backend.service;

import cz.brioh.backend.model.Review;

import java.util.List;

public interface ReviewService {
    Review create(Review review);
    Review get(long id);
    void delete(long id) throws Exception;
    List<Review> findByMovieId(long id);
    Review findByMovieIdAndUserId(long movieId, long userId);

}
