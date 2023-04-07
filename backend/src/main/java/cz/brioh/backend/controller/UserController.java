package cz.brioh.backend.controller;

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
        return userService.get(id);
    }
}
