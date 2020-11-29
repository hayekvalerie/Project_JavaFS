package com.example.backend;

import com.example.backend.User;
import com.example.backend.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> filterEmployee(String name){
        return userRepository.findByName(name);
    }
}