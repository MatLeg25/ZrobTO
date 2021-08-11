import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import Grid from '@material-ui/core/Grid';

export default function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { offerID } = useParams();

    const [offer, setOffer] = useState();

      // Podobnie do metod componentDidMount i componentDidUpdate:
  useEffect(() => {
        axios.get('http://localhost:8080/offer/'+offerID)
            .then(response => response.data)
            .then(data => {
                setOffer(data)
                console.log(data)
                console.log(offer)
            });
    }, []);





  
    return (
      <div>
        <h3>Offer ID =  {offerID}</h3>
        <hr />
    
      </div>
    );
  }


  ////////////////////
