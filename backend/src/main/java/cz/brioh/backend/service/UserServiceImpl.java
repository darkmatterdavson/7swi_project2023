package cz.brioh.backend.service;

import cz.brioh.backend.exception.RecordNotFoundException;
import cz.brioh.backend.model.User;
import cz.brioh.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

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

    @Override
    public User getByEmail(String email){
        return userRepository.findByEmail(email);
    }

    @Override
    public User getByEmailAndPassword(String email, String password){
        boolean exists = userRepository.existsUserByEmailAndPassword(email, password);
        if(exists) return userRepository.findByEmailAndPassword(email, password);

        User user = new User();
        String randomUsername = "user";
        boolean nameIsUnique = false;
        while(!nameIsUnique){
            Random rnd = new Random();
            int randomUserNumber = rnd.nextInt(1000000,9999999);
            randomUsername += randomUserNumber;
            boolean userAlreadyExists = userRepository.existsUserByName(randomUsername);
            if(!userAlreadyExists) nameIsUnique = true;

        }
        user.setEmail(email);
        user.setPassword(password);
        user.setName(randomUsername);
        create(user);
        return user;
    }

}
