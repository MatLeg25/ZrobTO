import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Box from '@material-ui/core/Box';

import Categories from './Categories';

class NavbarZT extends React.Component {


        displayNavbar() {
                                          
        const logo = <Box bgcolor="#c7f7d4" color="red" p={2} >
                        <Navbar.Brand href="#home">ZróbTO</Navbar.Brand>
                    </Box>

        const categories = (
                          <NavDropdown title="Kategorie" id="nav-dropdown">
                            <Categories />
                          </NavDropdown>
        )

                                        //m=height  //p=padding
          return (<Box component="div" m={2} p={2} >  
            <Navbar bg="light" expand="lg" >
            {logo}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="mr-auto">
                {categories}
                <Nav.Link href="#home">Zostań sprzedawcą</Nav.Link>
                <Nav.Link href="#link">Zaloguj się</Nav.Link>
                <Button variant="outline-success" >DOŁĄCZ</Button>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
          </Box>
            )
          }


          render() {
        return this.displayNavbar();
    }

}


export default NavbarZT;
