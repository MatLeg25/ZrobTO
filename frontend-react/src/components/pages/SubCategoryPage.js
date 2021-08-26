import React from 'react';
import {useParams} from 'react-router-dom';
import NavbarZT from "../navbar/NavbarZT";

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
        categoryId: 1,
        subcategoryId: 1,
        categories : [],
        subcategories : [],
        location : window.location.pathname,
        };    
        let x = this.state.location.split("/")

        console.log(x);
  }




  render() {

    return (

      <>
        <NavbarZT />
        <br /><br />

      <div> 
        <center>
        <b>Implementation in progress</b> <br />
        <b>Current location: {this.state.location}</b>
        </center>
      </div>

      </>
    );
  }

}


export default SubCategoryPage;
