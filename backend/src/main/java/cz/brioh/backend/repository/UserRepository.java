package cz.brioh.backend.repository;

import cz.brioh.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean findByName(String name);
}
