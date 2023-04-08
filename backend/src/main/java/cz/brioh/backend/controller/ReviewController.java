package cz.brioh.backend.controller;

import cz.brioh.backend.model.Review;
import cz.brioh.backend.service.ReviewService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

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
}
