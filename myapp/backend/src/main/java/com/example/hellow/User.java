package com.example.backend;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="Visited Restaurants")


public class User{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    public long id;

    @Column(name="Name")
    public String Name;
    @Column(name="Date")
    public String date;

    public User(){}

    public User(long id,String Name,String date){
        super();
        this.id=id;
        this.Name=Name;
        this.date=date;
    }



   


}
