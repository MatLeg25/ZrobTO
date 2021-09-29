import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import GetSubCategories from '../offerManager/GetSubCategories';
import Button from '@material-ui/core/Button';
import NavbarZT from "../navbar/NavbarZT";
import AuthService from "../../security/services/auth-service";

export default function OfferUpdate() {
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
                    category_id: data.category_Id,
                    subcategory_id: data.subcategory_Id,
                    subcategoryName: data.subcategoryName,
                })
            })
    }, []);

    console.log(offer)


    function getCurrentDate() {
      let date = new Date();
      return date.toLocaleTimeString()+"-"+date.toLocaleDateString();
    }


    function handleSubmit(event) {
      event.preventDefault(); //prevent page refresh
      
      const data = new FormData(event.target); //get data from HTML form
  
      //event.target.reset(); // clear form fields
  
      //build object (JSON) from data
      const newOffer = {
        id: data.get("offer-id"),
        title: data.get("title"),
        description: data.get("description"),
        price: data.get("price"),
        delivery_time: data.get("delivery-time"),
        revisions: data.get("revisions"),
        date: data.get("date"),
        category: data.get("category"),
        fileID: "", //data.get("file"), ID set below with ID given from server
        subcategoryID: data.get("subcategory-id") //ID used on server side to set subcategory into offer
      }

        ///////////////////Post offer and image
    //   let formData = new FormData();
    //   formData.append("file", data.get("file"));
    
    //   fetch('http://localhost:8080/add-offer-file', {
    //       method: 'POST', 
    //   //Here, in the REST call, we are not setting the Content-Type as multipart/form-data. The browser will do it for us
    //       body: formData,
    //     })
    //       //take response frome server (IMG ID) and set to file_id in newOffer
    //       .then(function(response) {
    //         return response.text();
    //       })
    //       .then(function(data) {
    //         console.log('Success:', data); // this will be a string
    //         newOffer.fileID = data;
    //       })
    //       .then(() => { this.postOffer(newOffer)}) // POST OFFER
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
  
    //   console.log("Added new offer:  ");
    //   console.log(newOffer);
    // }
  
    //function postOffer(offer) {
      fetch('http://localhost:8080/update-offer', {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + AuthService.getCurrentUser().accessToken,
          },
          body: JSON.stringify(newOffer),
        })
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        window.location.reload();
    }


    //////////////////////////////////////DETELTE
    function deleteFile(props) {
      //TODO get file ID from serwer (powinien byc do kazdej oferty przypisany)

      fetch('http://localhost:8080/files/'+props, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        window.location.reload();
    }
  
    return (

    <>
      <NavbarZT />
      <br /><br />  


      <form onSubmit={handleSubmit} >

      <div class="mb-3">
        <label htmlFor="offer-id" class="form-label">Offer ID</label>
        <input type="text" id="offer-id" name="offer-id" class="form-control" value={offer.id} readOnly class="form-control" id="disabledTextInput"/>
      </div>
      <div class="mb-3">
        <label htmlFor="user_id" class="form-label">User ID</label>
        <input type="text" id="user_id" name="user_id" class="form-control" value={offer.user_id} readOnly class="form-control" id="disabledTextInput"/>
      </div>
      <div class="mb-3">
        <label htmlFor="date" class="form-label">Date</label>
        <input type="text" id="date" name="date" value={getCurrentDate()} readOnly class="form-control" id="disabledTextInput" />
      </div>

      <div class="mb-3">
        <label htmlFor="title" class="form-label">Title</label>
        <input type="text" id="title" name="title" class="form-control" placeholder="Enter title" defaultValue={offer.title}/>
      </div>
      <div class="mb-3">
        <label htmlFor="description" class="form-label">Description</label>
        <input type="text" id="description" name="description" class="form-control" placeholder="Enter description" defaultValue={offer.description}/>
      </div>
      <div class="mb-3">
        <label htmlFor="delivery-time" class="form-label">Delivery time</label>
        <input type="number" min="0" id="delivery-time" name="delivery-time" class="form-control" placeholder="Enter delivery time (days)" defaultValue={offer.deliveryTime}/>
      </div>
      <div class="mb-3">
        <label htmlFor="revisions" class="form-label">Revisions</label>
        <input type="number" min="0" id="revisions" name="revisions" class="form-control" placeholder="Enter revisions number" defaultValue={offer.revisions}/>
      </div>
      <div class="mb-3">
        <label htmlFor="price" class="form-label">Price</label>
        <input type="text" id="price" name="price" class="form-control" placeholder="Enter price" defaultValue={offer.price}/>
      </div>

      <div class="mb-3">
        <img alt={'No image found'} src={offer.fileUrl} />
        <Button size="small" variant="contained" color="secondary"  onClick={() =>  deleteFile(offer.fileID)}>
                DELETE
        </Button>
      </div>
      <h5 style={{color: "grey"}}> CategoryID= {offer.category_id}</h5>
        <h5 style={{color: "grey"}}>Current SubcategoryID= {offer.subcategory_id}</h5>
        <h5 style={{color: "grey"}}>Current subcategory= {offer.subcategoryName}</h5>

        <GetSubCategories categoryId={offer.category_id} subcategoryId={offer.subcategory_id} />

      <button type="submit" class="btn btn-primary">Update</button>

    </form>

  </>

    );
  }

//   <div>
//   <h3>Offer ID =  {offerID}</h3>
//   <hr />
//   <h5>ID= {offer.id}</h5>
//   <h5>UserID= {offer.user_id}</h5>
//   <h5>Title= {offer.title}</h5>
//   <h5>Description= {offer.description}</h5>
//   <h5>Price= {offer.price}</h5>
//   <h5>Delivery time= {offer.deliveryTime}</h5>
//   <h5>Revisions= {offer.revisions}</h5>

// </div>