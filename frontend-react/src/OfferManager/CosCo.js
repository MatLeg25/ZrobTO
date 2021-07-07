import React, {Component, useState} from 'react';

class CosCo extends React.Component {
    constructor() {
      super();
      //this.getAllOfers();
      this.state = {
        offers : [],
        offersTEST : [{id: 'ID', title:'TITLE',description:'DESCRIPTION', price:'PRICE', date:'DATE'} ,{id: -1, title:'test',description:'Test description', price:22, date:'22-12-2233'} ],
      }
    }

    render() {
        return (
          <div> 
 
            <br /><hr /><br />
     HelloWorld!2
            <br /><hr /><br />
          </div>
    
        );
      }
    }
    
    
    export default CosCo;