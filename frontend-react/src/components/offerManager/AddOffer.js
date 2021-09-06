import React from 'react';
import axios from "axios";

class AddOffer extends React.Component {
  constructor() {
    super();
    this.state = {
      show:false,
      offers : [],
      subcategories : [],
      categories : [],
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.getAllCategories = this.getAllCategories.bind(this);
    this.getSubcategories = this.getSubcategories.bind(this);
    this.getAllOffers = this.getAllOffers.bind(this);
  }

  componentDidMount() {
    this.getAllOffers(); //load initial value from DB
    this.getSubcategories(); //load initial value from DB
    this.getAllCategories(); //load initial value from DB
  }

  getAllOffers() {
      axios.get('http://localhost:8080/offer')
      .then(response => response.data)
      .then(data => {
         this.setState({ offers: data });
        //console.log(data);
    });
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
//     axios.get('http://localhost:8080/subcategory') //getAllSubcategories
  axios.get('http://localhost:8080/subcategory/category?categoryId='+categoryId)
  .then(response => response.data)
  .then(data => {
     this.setState({ subcategories: data });
     //console.log(data);
});
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
      category: data.get("category-id"),
      fileID: "", //data.get("file"), ID set below with ID given from server
      subcategoryID: data.get("subcategory-id") //ID used on server side to set subcategory into offer
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
          newOffer.fileID = data;
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


  displaySelectCategory() {
    let categoryList = [];
    {this.state.categories.forEach(element => {
      categoryList.push(
                <option value={element.id} key={`categoryID=${element.id}`}>{element.name}</option> 
                )
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
      subcategoryList.push(
                <option value={element.id} key={`subcategoryID=${element.id}`}>{element.name}</option> 
                )
          })
    }
      return (<div class="mb-3">
                  <label htmlFor="subcategory" class="form-label">Select subcategory</label>
                    <select id="subcategory-id" name="subcategory-id" >
                      {subcategoryList}
                    </select>
              </div>);
    
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
          <input type="number" min="0" id="delivery-time" name="delivery-time" class="form-control" placeholder="Enter delivery time (days)"/>
        </div>
        <div class="mb-3">
          <label htmlFor="revisions" class="form-label">Revisions</label>
          <input type="number" min="0" id="revisions" name="revisions" class="form-control" placeholder="Enter revisions number"/>
        </div>
        <div class="mb-3">
          <label htmlFor="price" class="form-label">Price</label>
          <input type="text" id="price" name="price" class="form-control" placeholder="Enter price"/>
        </div>

        {this.displaySelectCategory()}

        {this.displaySelectSubcategory()}

        <div class="mb-3">
          <label htmlFor="file" class="form-label">Image</label>
          <input type="file" id="file" name="file" class="form-control" placeholder="Upload image" />
        </div>

        <button type="submit" class="btn btn-primary" onClick={() => window.location.reload()}>Submit</button>

      </form>
 
    );
  }


  render() {
    return this.displayForm();
  }


}


export default AddOffer;