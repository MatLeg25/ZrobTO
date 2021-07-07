import './App.css';
import React, {Component, useState} from 'react';  
import OfferManager from './OfferManager/OfferManager';
import Navbar1 from './Navbar1';



class App extends React.Component {
  constructor() {
    super();
    this.state={
    }

  }



  render() {
    return (
      <div> 
        <Navbar1 />
        <hr />
      <OfferManager />
        <hr />
      </div>
    );
  }
}


export default App;
