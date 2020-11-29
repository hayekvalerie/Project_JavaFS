import React from "react";
import Table from 'react-bootstrap/Table';




const UsersPage=()=>{
    return (
        <div>
            <h1 class="topnav" > Visited Restaurants </h1>
           
            <Table striped hover style={{border: "3px solid rgb(0, 0, 0)"}} >
  <thead>
    <tr>
  
      <th>Name</th>
      <th>Visit Date</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Restaurant 1</td>
      <td>December 10,2019</td>
    </tr>
    <tr>

      <td>Restaurant 2</td>
      <td>December 10,2019</td>
    </tr>
    <tr>
 
      <td>Restaurant 1</td>
      <td>August 17,2020</td>
    </tr>
    <tr>
   
      <td>Retaurant 3</td>
      <td>November 24,2020</td>
    </tr>
  </tbody>
</Table>
            
        </div>
        
        

        


    );
};

export default UsersPage;