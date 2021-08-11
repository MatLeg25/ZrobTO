//import './App.css';
import React, {Component, useState} from 'react';  
import BigCard from "../components/BigCard"
import Grid from '@material-ui/core/Grid';

export default function displayOffers(props) {

    const offersList = props.data;

    let listOffers = [];

    offersList.forEach(element => {
        const offer = <BigCard offer={element}/>
        listOffers.push(<Grid item xl={3}> {offer} </Grid>)
    });
    return listOffers;
  }
