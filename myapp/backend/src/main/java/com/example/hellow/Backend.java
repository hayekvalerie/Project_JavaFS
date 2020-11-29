package com.example.hellow;

import org.springframework.boot.CommandRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.beans.factory.annotation.Autowired;


@SpringBootApplication
public class Backend implements CommandRunner{

    public static void main(String[] args){
        SpringApplication.run(Backend.class,args);
    }

    @Autowired
    private UserRepository userrepo;

    @Override
    pubic void run(Sting... args) throws Exception{
        this.userrepo.save(new User("Restaurant1","October12"));
        this.userrepo.save(new User("Restaurant2","October2022"));
    }

    
}
