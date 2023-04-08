package cz.brioh.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

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

    public Movie(){}
    public Movie(long id, String title, long year, String thumbnail, String description) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.thumbnail = thumbnail;
        this.description = description;
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
}
