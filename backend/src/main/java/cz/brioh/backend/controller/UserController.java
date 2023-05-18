package cz.brioh.backend.controller;

import cz.brioh.backend.model.Login;
import cz.brioh.backend.model.User;
import cz.brioh.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public User create(@Valid @RequestBody User user){
        return userService.create(user);
    }

    @GetMapping("users/{id}")
    public User get(@PathVariable("id") long id){
        User ret = userService.get(id);
        ret.setPassword(null);
        return ret;
    }

    @DeleteMapping("users/{id}")
    public void delete(@PathVariable("id") long id) throws Exception {
        userService.delete(id);
    }

    @GetMapping("users/search/{email}")
    public User getByEmail(@PathVariable("email") String email){
        User ret = userService.getByEmail(email);
        ret.setPassword(null);
        return ret;
    }

    @PostMapping("/login")
    public User getByEmailAndPassword(@Valid @RequestBody() Login user) {
        System.out.println(user.getEmail()+ " " + user.getPassword());
        User newOrFoundUser = userService.getByEmailAndPassword(user.getEmail(), user.getPassword());
        newOrFoundUser.setPassword(null);
        return newOrFoundUser;
    }


}
