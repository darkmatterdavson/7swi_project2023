package cz.brioh.backend.service;

import cz.brioh.backend.exception.RecordNotFoundException;
import cz.brioh.backend.model.Review;
import cz.brioh.backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    private ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public Review create(Review review) {
        
        review.setDatePublished(LocalDateTime.now());
        Review ret = reviewRepository.save(review);
        return ret;
    }

    @Override
    public Review get(long id) {
        return reviewRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Review not found."));
    }

    @Override
    public void delete(long id){
        boolean exists = reviewRepository.existsById(id);
        if(exists){
            reviewRepository.deleteById(id);
        } else{
            throw new RecordNotFoundException("Review not found.");
        }
    }

    @Override
    public List<Review> findByMovieId(long id) {
        return reviewRepository.findAllByMovie_Id(id);
    }

    @Override
    public Review findByMovieIdAndUserId(long movieId, long userId) {
        return reviewRepository.findByMovie_IdAndUser_id(movieId, userId);
    }

}
