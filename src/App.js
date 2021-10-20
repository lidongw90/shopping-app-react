import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import {  Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import ShoppingList from "./components/ShoppingList"
import Details from "./components/Details"
import Cart from "./components/Cart/Cart"
import Default from "./components/Default"
import Modal from "./components/Modal"


function App() {
  return (
   <React.Fragment>
    
    <Navbar />
    <Route path ="/" exact component ={ShoppingList} />
<Switch>
  {/* <Route path ="/" exact component ={ShoppingList} /> */}
  <Route path ="/cart" exact component ={Cart} />
  <Route path ="/details" exact component ={Details} />
  <Route  component ={Default}/>  
</Switch>
<Modal />
  </React.Fragment>
  );
}

export default App;
