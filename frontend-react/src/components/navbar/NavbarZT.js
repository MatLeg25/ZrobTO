import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Box from '@material-ui/core/Box';
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom';

import Categories from './Categories';
import logoImg from '../../resources/logo.png';

class NavbarZT extends React.Component {


    displayNavbar() {

        const logo = <Box bgcolor="#def7ec" color="red" p={2}>
            <Link to={'/home'}>
                <img src={logoImg} width="180" height="50"/>
            </Link>
        </Box>

        const categories = (
                          <NavDropdown title="Kategorie"
                          id="dropdown-menu-align-responsive-2"
                          drop = 'start'
                          >
                                <Categories  />
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
