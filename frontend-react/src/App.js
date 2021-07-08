import './App.css';
import React, {Component, useState} from 'react';  
import OfferManager from './OfferManager/OfferManager';
import Navbar1 from './Navbar1';
import LandingPage from "./LandingPage";



class App extends React.Component {
  constructor() {
    super();
    this.state={
    }

  }



  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}


export default App;
