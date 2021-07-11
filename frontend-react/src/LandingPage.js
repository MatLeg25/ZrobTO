//import './App.css';
import React, {Component, useState} from 'react';
import {Container} from "react-bootstrap";
import { Paper } from '@material-ui/core';
import Image from "./resources/background.jpg"


import Navbar1 from "./Navbar1";


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '25em',
        backgroundPosition: "top right"

    }
};

class LandingPage extends React.Component {

    display() {
        return (
            <div>
                <Navbar1/>
                <Container height={1000}>
                    <Paper style={styles.paperContainer}>
                    </Paper>
                </Container>
            </div>
        )
    }


    render() {
        return this.display();
    }

}


export default LandingPage;
