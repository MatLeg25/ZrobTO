//import './App.css';
import React, {Component, useState} from 'react';  
import {Button, Modal} from 'react-bootstrap'

class OfferManager extends React.Component {
  constructor() {
    super();
    //this.getAllOfers();
    this.state = {
      show:false,
      offers : [],
      offersTEST : [{id: 'ID', title:'TITLE',description:'DESCRIPTION', price:'PRICE', date:'DATE'} ,{id: -1, title:'test',description:'Test description', price:22, date:'22-12-2233'} ],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllOfers = this.getAllOfers.bind(this);
  }


  componentDidMount() {
    this.getAllOfers(); //load initial value from DB
  }


  getAllOfers() {
    fetch('http://localhost:8080/offer')
      .then(response => response.json())
     // .then(data => JSON.stringify(data))
      .then(data => {
         this.setState({ offers: data });
        console.log(data);
    });
  }


  getOfferById(props) {
    fetch('http://localhost:8080/offer/'+props)
      .then(response => response.json())
     // .then(data => JSON.stringify(data))
      .then(data => {
         //this.setState({ offers: data });
        console.log(data);
        return data; //could be directly from this.state: 'return this.offers[props]'
    });
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
      delivery_time: data.get("delivery_time"),
      revisions: data.get("revisions"),
      date: data.get("date"),
      //file_id: data.get("file"),
      subcategory_id: data.get("subcategory_id")
    }

    ///////////////////////////////////////////////////////////////upload FILE
    let formData = new FormData();
    formData.append("file", data.get("file"));
  
    fetch('http://localhost:8080/files', {
        method: 'POST', 
//Here, in the REST call, we are not setting the Content-Type as multipart/form-data. The browser will do it for us
        body: formData,
      })
      .then(() => { this.getAllOfers()}) // reload from DB after add new offer
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    //////////////////////////////////////////////////////////////////////////////////////

    console.log("Added new offer:  " + newOffer);
  
    //add new offer to state in the last position
    this.setState({
      offers: [...this.state.offers, newOffer]
    })

    fetch('http://localhost:8080/offer', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOffer),
      })
      // .then(response => response.json())
      .then(() => { this.getAllOfers()}) // reload from DB after add new offer
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  getCurrentDate() {
    let date = new Date();
    return date.toLocaleTimeString()+"-"+date.toLocaleDateString();
  }


  deleteOffer(props) {

    let param = 'id='+props;
    
    fetch('http://localhost:8080/offer?'+param, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      },
    // body: JSON.stringify(productObjectJSON), niepotrzebne bo robimy by param
    })
    // .then(response => response.json())
      .then(() => { this.getAllOfers()}) // reload from DB after delete
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  updateOffer(props) {

    alert("Details in console, offer ID="+props)

    let updateOffer = this.getOfferById(props);

    console.log(updateOffer)
    
    // fetch('http://localhost:8080/delete-offer?'+param, {
    //   method: 'DELETE', 
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // // body: JSON.stringify(productObjectJSON), niepotrzebne bo robimy by param
    // })
    // // .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });

  }



  startOfferManager() {
      alert("OK")
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
          <label htmlFor="category" class="form-label">Category</label>
          <input type="text" id="category" name="category" class="form-control" placeholder="Select category"/>
        </div>
        <div class="mb-3">
          <label htmlFor="subcategory" class="form-label">Subcategory</label>
          <input type="text" id="subcategory" name="subcategory" class="form-control" placeholder="Select subcategory"/>
        </div>

        <div class="mb-3">
          <label htmlFor="file" class="form-label">Image</label>
          <input type="file" id="file" name="file" class="form-control" placeholder="Upload image" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

      </form>
 
    );
  }


  displayOffers() {
    const objectsList = this.state.offers;

    let listOffers = [];

    objectsList.forEach(element => {
      let tmpID = element['id'];
        const offer = <h2>

                        <div class="spinner-grow text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>

                        <span class="badge rounded-pill bg-info text-dark" >{element['id']}</span> 
                        <span class="badge rounded-pill bg-info text-dark">{element['title']}</span> 
                        <span class="badge rounded-pill bg-info text-dark">{element['description']}</span> 
                        <span class="badge rounded-pill bg-info text-dark">{element['price']}</span> 
                        <span class="badge rounded-pill bg-info text-dark">{element['date']}</span>

                        <button type="button" class="btn btn-warning" id={'edit-'+element['id']} onClick={() => this.updateOffer(tmpID)}>Edit</button>
                        <button type="button" class="btn btn-danger" id={'delete-'+element['id']} onClick={() => this.deleteOffer(tmpID)}>Delete</button>
                      
                      </h2>
        listOffers.push(<li key = {listOffers.length} >{offer}</li>)
    });
    return listOffers;
  }


  displayModal() {
    return(<div>

{/* <!-- Button trigger modal --> */}
<Button className="btn btn-dark" onClick={() => this.handleModal()}> Manage offers! </Button>

      <Modal show={this.state.show} onHide={() => this.handleModal()} >
      <Modal.Header className="btn btn-dark"> Modal Head Part</Modal.Header>
      <Modal.Body>
      {this.displayForm()}
      </Modal.Body>
      <Modal.Footer>
        <button type="button" class="btn btn-dark" onClick={() => this.handleModal()}>Close Modal</button>
      </Modal.Footer>
      </Modal>

      <button type="button" class="btn btn-light"  onClick={this.getAllOfers}>Refresh</button>
      

    </div>)
}


handleModal() {
  this.setState({show: !this.state.show});
}


  render() {
    return (
      <div> 
        {/* {this.displayForm()} */}
        <br /><hr /><br />
        {this.displayOffers()}
        <br /><hr /><br />
        {this.displayModal()}
      </div>

    );
  }
}


export default OfferManager;
