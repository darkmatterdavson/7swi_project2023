package cz.brioh.backend.repository;

import cz.brioh.backend.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllById(long id);
    List<Review> findAllByMovie_Id(long id);
    Review findByMovie_IdAndUser_id(long movieId, long userId);

}
