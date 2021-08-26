import React from 'react';
import {Button, Modal} from 'react-bootstrap'
import DisplayOffers from "../offerManager/DisplayOffers"
import AddOffer from "../offerManager/AddOffer"
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import NavbarZT from "../navbar/NavbarZT";

class OfferManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      offers : [],
      }
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllOffers = this.getAllOffers.bind(this);
  }


  componentDidMount() {
    this.getAllOffers(); //load initial value from DB
  }


  getAllOffers() {
      axios.get('http://localhost:8080/offer')
      .then(response => response.data)
      .then(data => {
         this.setState({ offers: data });
        console.log(data);
    });
  }


  getOfferById(props) {
    axios.get('http://localhost:8080/offer/'+props)
      .then(response => response.data)
     // .then(data => JSON.stringify(data))
      .then(data => {
         //this.setState({ offers: data });
        console.log(data);
        return data; //could be directly from this.state: 'return this.offers[props]'
    });
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
      .then(() => { this.getAllOffers()}) // reload from DB after delete
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

  }

  
  displayModal() {
    return(<div>

    {/* <!-- Button trigger modal --> */}
    <Button className="btn btn-dark" size="lg" onClick={() => this.handleModal()}> Add new offer </Button>

      <Modal show={this.state.show} onHide={() => this.handleModal()} >
      <Modal.Header className="btn btn-dark"> Modal Head Part</Modal.Header>
      <Modal.Body>
                  <AddOffer />
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-dark" onClick={() => this.handleModal()}>Close Modal</button>
      </Modal.Footer>
      </Modal>

      {/* <button type="button" className="btn btn-light"  onClick={this.getAllOffers}>Refresh</button> */}

    </div>)
}


handleModal() {
  this.setState({show: !this.state.show});
  this.getAllOffers(); // reload from DB after add new offer
}


  render() {
    return (

      <div>
        <NavbarZT />
        <br /><br />
      
        <div> 
          <br /><hr /><br />
          <center> {this.displayModal()}</center>
          <br /><hr /><br />

          <Grid item xs={12}/>
            <Grid container>
                <Grid item xs={1} xm={2}/>
                <Grid item xs={10} xm={8} container spacing={4} justifyContent={"space-evenly"}>
                      <DisplayOffers data={this.state.offers} option={true} /> 
                </Grid>
            </Grid>
          
        </div>
      
      </div>

    );
  }
}


export default OfferManager;
