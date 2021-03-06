package com.example.hellow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@SpringBootApplication
@RestController
public class HellowApplication {

	@GetMapping(value="/backend")
	public String getMethodName(){
		return "Hello";
	}

	public static void main(String[] args) {
		SpringApplication.run(HellowApplication.class, args);
	}

}
