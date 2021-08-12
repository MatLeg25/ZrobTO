import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import Grid from '@material-ui/core/Grid';

export default function OfferDetails() {
  // We can use the `useParams` hook here to access the dynamic pieces of the URL.
  let { offerID } = useParams();

  const [offer, setOffer] = useState({});

  useEffect(() => {
        axios.get('http://localhost:8080/offer/'+offerID)
            .then(response => response.data)
            .then(data => {
                setOffer({
                    id: data.id,
                    user_id: data.user_id,
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    deliveryTime: data.deliveryTime,
                    revisions: data.revisions,
                    fileUrl: data.fileUrl,
                    subcategory_id: data.subcategory_Id,
                    subcategoryName: data.subcategoryName,
                })
            })
    }, []);

    console.log(offer)
  
    return (
      <div>
        <h3>Offer ID =  {offerID}</h3>
        <hr />
        <h5>ID= {offer.id}</h5>
        <h5>UserID= {offer.user_id}</h5>
        <h5>Title= {offer.title}</h5>
        <h5>Description= {offer.description}</h5>
        <h5>Price= {offer.price}</h5>
        <h5>Delivery time= {offer.deliveryTime}</h5>
        <h5>Revisions= {offer.revisions}</h5>
        <h5><img src={offer.fileUrl} /></h5>
        <h5>SubcategoryID= {offer.subcategory_id}</h5>
        <h5>Subcategory= {offer.subcategoryName}</h5>
      </div>
    );
  }

