import React from "react";
import { Button } from '@material-ui/core';
import styles from './App.module.css';
import japanese from './japanese.jpg';
import { Checkmark } from 'react-checkmark';



const MainPage=()=>{
    
    return (
        
        <div>
            <div class="topnav">
            <input type="text" placeholder="Search.."></input>
            {" "}
            <select>
                <option value="LebaneseFood">Lebanese</option>
                <option value="JapaneseFood">Japanese</option>
                <option value="AmericanFood">American</option>
                <option selected value="Types">Types</option>
            </select>
            {" "}
           
            <Button color="orange">Search</Button>
            
        

        </div>
        <img className="photo" src={japanese} alt="Logo"/>
        <br></br>
        <a href="http://localhost:3000/Restau" class="btn btn-primary">Tsubaki Restaurant</a>
        <Checkmark size="medium" color="green"></Checkmark>
        

        <div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a class="active" href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
<br></br>
<br></br>
        <div class="w3-bar w3-border w3-round">
  <a href="http://localhost:3000/" class="w3-button">&#10094; Older</a>
  {" "}
  <a href="http://localhost:3000/users" class="w3-button w3-right">Newer &#10095;</a>
</div>

    

                        
   </div>


    );
};

export default MainPage;
