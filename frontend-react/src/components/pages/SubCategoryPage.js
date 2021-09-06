import React from 'react';
import {useParams} from 'react-router-dom';
import NavbarZT from "../navbar/NavbarZT";
import DisplayOffers from "../offerManager/DisplayOffers"
import Grid from '@material-ui/core/Grid';
import axios from "axios";

// export default function Child() {
//     // We can use the `useParams` hook here to access
//     // the dynamic pieces of the URL.
//     let { catID, subCatID } = useParams();
  
//     return (
//       <div>
//         <h3>Category ID =  {catID}</h3>
//         <h5>subCategory ID = {subCatID} </h5>
//         <hr />
//         <b>Implementation in progress</b>
//       </div>
//     );
//   }

class SubCategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categoryId: -1,
        subcategoryId: -1,
        category : [],
        subcategory : [],
        offers : [],
        location : window.location.pathname,
        }
        this.getSubCategoryID = this.getSubCategoryID.bind(this);
        this.getAllOffers = this.getAllOffers.bind(this);
  }


  componentDidMount() {
    this.getSubCategoryID();
    this.getCategoryName();
    this.getSubcategoryName();
    this.getAllOffers();
  }

  /////////////////////////////TODO: REFACTOR - use state with ID

  getCategoryID() {
    let pathVariables = this.state.location.split("/")
    this.setState({categoryId: pathVariables[2]});
    return pathVariables[2];
  }

  getSubCategoryID() {
    let pathVariables = this.state.location.split("/")
    this.setState({categoryId: pathVariables[2]});
    this.setState({subcategoryId: pathVariables[4]});
    return pathVariables[4];
  }

  getCategoryName() {
    let categoryID = this.getCategoryID();
    axios.get('http://localhost:8080/category/'+categoryID)
    .then(response => response.data)
    .then(data => {
       this.setState({ category: data });
      console.log(data);
  });
  }

  getSubcategoryName() {
    let subcategoryID = this.getSubCategoryID();
    axios.get('http://localhost:8080/subcategory/'+subcategoryID)
    .then(response => response.data)
    .then(data => {
       this.setState({ subcategory: data });
      console.log(data);
  });
  }




  /////////////////////////////

  getAllOffers() {
    let subcategoryID = this.getSubCategoryID();
    axios.get('http://localhost:8080/offer/subcategory/'+subcategoryID)
    .then(response => response.data)
    .then(data => {
       this.setState({ offers: data });
      console.log(data);
  });
}

displayOffer() {

  console.log(this.state.offers)

  if(this.state.offers.length>0) {
        return (
          <>
          <Grid item xs={12}/>
          <Grid container>
                <Grid item xs={1} xm={2}/>
                <Grid item xs={10} xm={8} container spacing={4} justifyContent={"space-evenly"}>
                      <DisplayOffers data={this.state.offers} option={false} /> 
                </Grid>
          </Grid>
          </>
        )
  } else {
    return (<h3>Brak ofert dla tej podkategorii! {this.state.subcategoryId} </h3>)
  }
}






  render() {

    return (

      <>
        <NavbarZT />
        <br /><br />

      <div> 
        <center>
        {/* <p>Implementation in progress
        (Current location: {this.state.location})</p><br />
        <b>Category = {this.state.category.name}</b> (ID={this.state.categoryId}) <br />
        <b>Subcategory = {this.state.subcategory.name} </b> (ID={this.state.subcategoryId})  */}

        <b>{this.state.category.name} / {this.state.subcategory.name} </b>
        <hr />
        {this.displayOffer()}
        </center>
      </div>

      </>
    );
  }

}


export default SubCategoryPage;
