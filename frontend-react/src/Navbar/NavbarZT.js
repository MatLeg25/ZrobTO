import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Box from '@material-ui/core/Box';
import Container from 'react-bootstrap/Container'

  //<Box component="div" m={2} p={2} width={1}>  

import Categories from './Categories';
import logoImg from '../resources/logoV1.png';

class NavbarZT extends React.Component {


        displayNavbar() {
                                          
        const logo = <Box bgcolor="#c7f7d4" color="red" p={2} >
                        <img src={logoImg} width="100" height="50" />
                    </Box>

        const categories = (
                          <NavDropdown title="Kategorie" id="nav-dropdown">
                            <Categories />
                          </NavDropdown>
        )

          return (
            <Container >
        
            <Navbar bg="light" expand="lg" sticky="top">
            {logo}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
              {categories}
                {/* <Categories /> */}
             
                <Nav.Link href="#home">Zostań sprzedawcą</Nav.Link>
                <Nav.Link href="#link">Zaloguj się</Nav.Link>
                <Button variant="outline-success" >DOŁĄCZ</Button>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          </Container>
            )
          }


          render() {
        return this.displayNavbar();
    }

}


export default NavbarZT;
