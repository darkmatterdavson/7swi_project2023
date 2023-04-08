package cz.brioh.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.List;

@Entity
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = {"name"}), @UniqueConstraint(columnNames = {"email"})})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String name;

    @NotNull
    private String password;

    @NotNull
    private String email;

    @NotNull
    private boolean isAdmin;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "user", fetch = FetchType.EAGER)
    private List<Review> reviews;

    public User(){}

    public User(long id, String name, String password, String email, boolean isAdmin, List<Review> reviews) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.isAdmin = isAdmin;
        this.reviews = reviews;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
}
