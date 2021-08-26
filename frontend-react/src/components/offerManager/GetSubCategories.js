import React from 'react';
import {Button, Modal} from 'react-bootstrap'
import DisplayOffers from "../offerManager/DisplayOffers"
import AddOffer from "../offerManager/AddOffer"
import axios from "axios";
import Grid from '@material-ui/core/Grid';

class GetSubCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categoryId: props.categoryId,
        subcategoryId: props.subcategoryId,
        categories : [],
        subcategories : [],
        }

        console.log(this.state.categoryId)
        console.log(this.state.subcategoryId)

    this.setCategory = this.setCategory.bind(this);
    this.getAllCategories = this.getAllCategories.bind(this);
    this.getSubcategories = this.getSubcategories.bind(this);
  }

  componentDidMount() {
    this.getAllCategories();
    this.getSubcategories();
    console.log(this.state.categoryId)
    console.log(this.state.subcategoryId)
    //TODO - load on start SELDCT DEFAULT VALUE
  }

  getAllCategories() {
    axios.get('http://localhost:8080/category')
    .then(response => response.data)
    .then(data => {
       this.setState({ categories: data });
      //console.log(data);
  });
}

getSubcategories(categoryId = 1) {
  axios.get('http://localhost:8080/subcategory/category?categoryId='+categoryId)
    .then(response => response.data)
    .then(data => {
     this.setState({ subcategories: data });
    });
}


 displaySelectCategory() {
    let categoryList = [];
    {this.state.categories.forEach(element => {
      if(this.state.categoryId===element.id) {
        categoryList.push(
                <option value={element.id} selected key={`categoryID=${element.id}`}>{element.name}</option> 
                )
        } else {
        categoryList.push(
                  <option value={element.id} key={`categoryID=${element.id}`}>{element.name}</option> 
                  )
        }
          })
    }
      return (<div class="mb-3">
                  <label htmlFor="category" class="form-label">Select category</label>
                    <select id="category-id" name="category-id" onChange={this.setCategory}>
                      {categoryList}
                    </select>
              </div>);
      }


  setCategory(event) {
      event.preventDefault(); //prevent page refresh
      this.getSubcategories(event.target.value);
      }


  displaySelectSubcategory() {
    let subcategoryList = [];
    {this.state.subcategories.forEach(element => {
      if(this.state.subcategoryId===element.id) {
        subcategoryList.push(
          <option value={element.id} selected key={`subcategoryID=${element.id}`}>{element.name}</option> 
          )
        } else {
        subcategoryList.push(
                  <option value={element.id} key={`subcategoryID=${element.id}`}>{element.name}</option> 
                  )
        }
          })
    }
      return (<div class="mb-3">
                  <label htmlFor="subcategory" class="form-label">Select subcategory</label>
                    <select id="subcategory-id" name="subcategory-id" >
                      {subcategoryList}
                    </select>
              </div>);
    
      }


render() {
    return (
      <div> 
          {this.displaySelectCategory()}
          {this.displaySelectSubcategory()}
      </div>
    );
  }

}

export default GetSubCategories;
