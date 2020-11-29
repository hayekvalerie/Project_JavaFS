import logo from './logo.svg';
import './App.css';
import React,{Component}from "react";


import {
  BrowserRouter as Router,
   Route,
   Switch,
   Link,
   Redirect
  } from "react-router-dom";

  


  //Pages
  import MainPage from "./pages";
  import RestaurantPage from "./pages/Restau";
  import UserPage from "./pages/users";
  import Menu from "./Menu";
  import './Menu.css';
import { Table } from 'react-bootstrap';
import UserComponent from './components/UserComponent';
 

  class App extends Component{
    render(){

      return (
        
      <Router>
        <Menu/>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Restau"component= {RestaurantPage} />
        <Route exact path="/users"component= {UserPage} />
        <Redirect to="/Restau"/>
        <UserComponent></UserComponent>
        </Switch>       
      </Router>
      );
    }
  }




export default App;
