//import './App.css';
import React, {Component, useState} from 'react';
import {Button, Modal, Navbar} from 'react-bootstrap'

import Navbar1 from "./Navbar1";

class LandingPage extends React.Component {

    display() {
        return (
            <div>
                <Navbar1/>
            <div> Landing Page</div>

            </div>
        )
    }


    render() {
        return this.display();
    }

}


export default LandingPage;
