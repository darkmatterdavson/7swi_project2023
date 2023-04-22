package cz.brioh.backend.service;

import cz.brioh.backend.exception.RecordNotFoundException;
import cz.brioh.backend.model.User;
import cz.brioh.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User create(User user) {
        User ret = userRepository.save(user);
        return ret;
    }

    @Override
    public User get(long id) {
        return userRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("User not found."));
    }

    @Override
    public void update(User user) throws Exception {
        User userFromDb = get(user.getId());
        if(userFromDb != null){
            userFromDb.setName(user.getName());
            userFromDb.setAdmin(user.isAdmin());
            userFromDb.setEmail(user.getEmail());
            userFromDb.setPassword(user.getPassword());
            userFromDb.setReviews(user.getReviews());
            userRepository.save(userFromDb);
        } else{
            throw new RecordNotFoundException("User not found.");
        }
    }

    @Override
    public void delete(long id) throws Exception {
        boolean exists = userRepository.existsById(id);
        if(exists){
            userRepository.deleteById(id);
        } else{
            throw new RecordNotFoundException("User not found.");
        }
    }

    @Override
    public boolean usernameExists(String name) {
        return userRepository.findByName(name);
    }

}
