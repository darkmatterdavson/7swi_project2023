package cz.brioh.backend.service;

import cz.brioh.backend.model.Review;

import java.util.List;

public interface ReviewService {
    Review create(Review review);
    Review get(long id);
    void update(Review movie) throws Exception;
    void delete(long id) throws Exception;
    List<Review> getAll();
    List<Review> search(String title);
}
