import React from 'react';
import {useParams} from 'react-router-dom';

export default function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { catID, subCatNameID, subCatID } = useParams();
  
    return (
      <div>
        <h3>Category ID =  {catID}</h3>
        <h4>subCategoryName ID = {subCatNameID} </h4>
        <h5>subCategory ID = {subCatID} </h5>
        <hr />
        <b>Implementation in progress</b>
      </div>
    );
  }
