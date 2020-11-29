package com.example.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.backend.User;
import com.example.backend.UserRepository;


@CrossOrigin(origins="http://localhost:3000/users")
@RestController
@RequestMapping("api/")
public class UserController{

    @Autowired
    private UserRepository userrepository;

    @GetMapping("users")
    public List<User> getUsers(){
        return this.userrepository.findall();
    }
}

