import React, {Component, useState} from 'react';  
import {Button, Modal} from 'react-bootstrap'
import DisplayOffer from "./DisplayOffers"
import axios from "axios";

class AddOffer extends React.Component {
  constructor() {
    super();
    //this.getAllOfers();
    this.state = {
      show:false,
      offers : [],
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.getAllOfers = this.getAllOfers.bind(this);
  }


  getCurrentDate() {
    let date = new Date();
    return date.toLocaleTimeString()+"-"+date.toLocaleDateString();
  }


  handleSubmit(event) {
    event.preventDefault(); //prevent page refresh
    
    const data = new FormData(event.target); //get data from HTML form

    event.target.reset(); // clear form fields

    //build object (JSON) from data
    const newOffer = {
      //id: -1, //id is set by server
      title: data.get("title"),
      description: data.get("description"),
      price: data.get("price"),
      delivery_time: data.get("delivery-time"),
      revisions: data.get("revisions"),
      date: data.get("date"),
      category: data.get("category"),
      tmpID: "", //data.get("file"), ID set below with ID given from server
      subcategory_id: 10//data.get("subcategory-id")
    }

    console.log(newOffer)

    this.setState({
      offers: [...this.state.offers, newOffer] //add new offer to state in the last position
    })

      ///////////////////Post offer and image
    let formData = new FormData();
    formData.append("file", data.get("file"));
  
    fetch('http://localhost:8080/add-offer-file', {
        method: 'POST', 
    //Here, in the REST call, we are not setting the Content-Type as multipart/form-data. The browser will do it for us
        body: formData,
      })
        //take response frome server (IMG ID) and set to file_id in newOffer
        .then(function(response) {
          return response.text();
        })
        .then(function(data) {
          console.log('Success:', data); // this will be a string
          newOffer.tmpID = data;
        })
        .then(() => { this.postOffer(newOffer)}) // POST OFFER
      .catch((error) => {
        console.error('Error:', error);
      });

    console.log("Added new offer:  ");
    console.log(newOffer);
  
  }

  postOffer(offer) {
    fetch('http://localhost:8080/add-offer2', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offer),
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


displayForm() {

    return (
      <form onSubmit={this.handleSubmit} >

        <div class="mb-3">
          <label htmlFor="user_id" class="form-label">User ID</label>
          <input type="text" id="user_id" name="user_id" class="form-control" value='123456' readOnly class="form-control" id="disabledTextInput"/>
        </div>
        <div class="mb-3">
          <label htmlFor="date" class="form-label">Date</label>
          <input type="text" id="date" name="date" value={this.getCurrentDate()} readOnly class="form-control" id="disabledTextInput" />
        </div>

        <div class="mb-3">
          <label htmlFor="title" class="form-label">Title</label>
          <input type="text" id="title" name="title" class="form-control" placeholder="Enter title"/>
        </div>
        <div class="mb-3">
          <label htmlFor="description" class="form-label">Description</label>
          <input type="text" id="description" name="description" class="form-control" placeholder="Enter description"/>
        </div>
        <div class="mb-3">
          <label htmlFor="delivery-time" class="form-label">Delivery time</label>
          <input type="number" min="0" id="delivery-time" name="delivery-time" class="form-control" placeholder="Enter delivery time"/>
        </div>
        <div class="mb-3">
          <label htmlFor="revisions" class="form-label">Revisions</label>
          <input type="number" min="0" id="revisions" name="revisions" class="form-control" placeholder="Enter delivery time (days)"/>
        </div>
        <div class="mb-3">
          <label htmlFor="price" class="form-label">Price</label>
          <input type="text" id="price" name="price" class="form-control" placeholder="Enter price"/>
        </div>
        <div class="mb-3">
          <label htmlFor="category" class="form-label">Select Category</label>
            <select id="category" name="category">
              <option value="Grafika i Design">Grafika i Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Foto i wideo">Foto i wideo</option>
              <option value="Programowanie">Programowanie</option>
              <option value="Pozostałe">Pozostałe</option>
            </select>
        </div>
        <div class="mb-3">
        <label htmlFor="subcategory" class="form-label">Select subategory</label>
            <select id="subcategory" name="subcategory">
              <option value="subcat">Subcaregories</option>
            </select>
        </div>

        <div class="mb-3">
          <label htmlFor="file" class="form-label">Image</label>
          <input type="file" id="file" name="file" class="form-control" placeholder="Upload image" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

      </form>
 
    );
  }


  render() {
    return this.displayForm();
  }


}


export default AddOffer;