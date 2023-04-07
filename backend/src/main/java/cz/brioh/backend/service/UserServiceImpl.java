package cz.brioh.backend.service;

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
    }

    @Override
    public void delete(long id) throws Exception {
    }

    @Override
    public List<User> getAll() {
        return null;
    }

    @Override
    public List<User> search(String name) {
        return null;
    }
}
