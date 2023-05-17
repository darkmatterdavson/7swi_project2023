package cz.brioh.backend.service;

import cz.brioh.backend.model.User;

import java.util.List;

public interface UserService {
    User create(User user);
    User get(long id);
    void update(User user) throws Exception;
    void delete(long id) throws Exception;
    boolean usernameExists(String name);
    User getByEmail(String email);
    User getByEmailAndPassword(String email, String password);
}
