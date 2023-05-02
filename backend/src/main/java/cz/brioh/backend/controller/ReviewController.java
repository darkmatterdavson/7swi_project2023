package cz.brioh.backend.controller;

import cz.brioh.backend.model.Movie;
import cz.brioh.backend.model.Review;
import cz.brioh.backend.model.User;
import cz.brioh.backend.service.ReviewService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class ReviewController {
    private ReviewService reviewService;

    public ReviewController(ReviewService reviewService){ this.reviewService = reviewService;}

    @PostMapping("/reviews")
    public Review create(@Valid @RequestBody Review review) {return reviewService.create(review);}

    @GetMapping("reviews/{id}")
    public Review get(@PathVariable("id") long id){
        return reviewService.get(id);
    }

    @DeleteMapping("reviews/{id}")
    public void delete(@PathVariable("id") long id) throws Exception {
        reviewService.delete(id);
    }

    @GetMapping("/reviews/search/{movie_id}")
    public List<Review> search(@PathVariable("movie_id") long movieId){
        return reviewService.findByMovieId(movieId);
    }

    @GetMapping("reviews/search/{movie_id}/movies/{user_id}")
    public Review search(@PathVariable long movie_id, @PathVariable long user_id){
        return reviewService.findByMovieIdAndUserId(movie_id, user_id);
    }

    @GetMapping("movies/{movie_id}/reviews")
    public List<Object[]> getMovieReviews(@PathVariable long movie_id) {
        return reviewService.findReviewsAndTheirUsersNamesByMovieId(movie_id);
    }


}
