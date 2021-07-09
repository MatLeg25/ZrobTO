import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Box from '@material-ui/core/Box';

class Categories extends React.Component {
    constructor() {
        super();
        this.state = {
          categoriesName : ["Grafika i Design", "Digital Marketing", "Foto i wideo", "Programowanie"],
            subCategories : ["cat1","cat2","cat3","cat4","cat5"],
        }

    }
    

displayCategories() {

    const subCategory = this.state.subCategories.map((subCategory, index) =>
    <Nav.Link href={"#category"+index}>{subCategory}</Nav.Link>
    )

    const categoryName = this.state.categoriesName.map((category, index) =>
        <Tab eventKey={"home"+index} title={category}>
            {/* <Nav className="me-auto"> */}
          {subCategory}
          {/* </Nav> */}
        </Tab>
    );


    return (
    //   <DropdownButton id="dropdown-basic-button" title="Kategorie"> </DropdownButton>
    <>

    <Tabs defaultActiveKey="home2" id="uncontrolled-tab-example" className="mb-3">
        {categoryName}
    </Tabs>




        



    </>
      )
    }


    render() {
        return this.displayCategories();
    }

}


export default Categories;