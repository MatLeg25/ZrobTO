import React, { useState, useEffect } from 'react';
import BigCard from "../BigCard"
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Button from '@material-ui/core/Button';


export default function DisplayOffers(props) {

    const [show, setShow] = useState(false);

    const offersList = props.data;

    let listOffers = [];


    function addOptions(elementId) {

      if(props.option===true)
      {
        const options = (
            <>
              <Button size="small" variant="contained" href={"offer-update/" + elementId}>
                EDIT
              </Button>
              <Button size="small" variant="contained" color="secondary"  onClick={() =>  deleteOffer(elementId)}>
                DELETE
              </Button>
            </>
        )
        return options;
      }
      
    }
    
//////////////////////////////////////DETELTE
    function deleteOffer(props) {

        let param = 'id='+props;
        
        fetch('http://localhost:8080/offer?'+param, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
          },
        // body: JSON.stringify(productObjectJSON), niepotrzebne bo robimy by param
        })
        // .then(response => response.json())
          //.then(() => { this.getAllOffers()}) // reload from DB after delete
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          window.location.reload();
      }

//////////////////////////////////////UPDATE
    function getOfferById(props) {
        axios.get('http://localhost:8080/offer/'+props)
        .then(response => response.data)
        // .then(data => JSON.stringify(data))
        .then(data => {
            //this.setState({ offers: data });
            console.log(data);
            return data; //could be directly from this.state: 'return this.offers[props]'
        });
    }

    function updateOffer(props) {

        alert("Details in console, offer ID="+props)
    
        let updateOffer = getOfferById(props);
    
      }

      function handleModal() {
        setShow(!show);
        //this.getAllOffers(); // reload from DB after add new offer
      }
///////////////////////////////////////////////////////////////////



    offersList.forEach(element => {
                        
        const offer = <div>
            {addOptions(element.id)}
            <BigCard offer={element}/>
        </div>
        listOffers.push(<Grid item xl={3}> {offer} </Grid>)
    });
    return listOffers;
  }
