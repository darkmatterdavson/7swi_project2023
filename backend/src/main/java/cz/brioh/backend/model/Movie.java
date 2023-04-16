package cz.brioh.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.List;

@Entity
@Table(name = "movies")

public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String title;

    private long year;

    private String thumbnail;

    private String description;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "movie", fetch = FetchType.EAGER)
    private List<Review> reviews;

    public Movie(){}
    public Movie(long id, String title, long year, String thumbnail, String description, List<Review> reviews) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.thumbnail = thumbnail;
        this.description = description;
        this.reviews = reviews;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public long getYear() {
        return year;
    }

    public void setYear(long year) {
        this.year = year;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
}
