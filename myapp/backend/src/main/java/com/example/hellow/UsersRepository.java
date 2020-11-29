package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.User;



@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    List<User> findByName(String name);
}