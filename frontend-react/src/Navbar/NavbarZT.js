import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Box from '@material-ui/core/Box';
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom';

//<Box component="div" m={2} p={2} width={1}>

import Categories from './Categories';
import logoImg from '../resources/logoV1.png';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Grid from "@material-ui/core/Grid";

class NavbarZT extends React.Component {


    displayNavbar() {

        const logo = <Box bgcolor="#c7f7d4" color="red" p={2}>
            <Link to={'/home'}>
                <img src={logoImg} width="100" height="50"/>
            </Link>
        </Box>

        const categories = (
            <NavDropdown title="Kategorie"
                         align={{lg: 'end'}}
                         id="dropdown-menu-align-responsive-2"
            >
                <Categories/>
            </NavDropdown>
        )
        return (

            <Navbar bg="light" expand="lg" sticky="top">
                <Grid container>
                    <Grid item xs={0} sm={2}></Grid>
                    <Grid item> {logo} </Grid>
                    <Grid container item xs={12} sm={8}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                {categories}
                                <Nav.Link href="#home">Zostań sprzedawcą</Nav.Link>
                                <Nav.Link href="#link">Zaloguj się</Nav.Link>
                                <Button variant="outline-success">DOŁĄCZ</Button>
                            </Nav>
                </Navbar.Collapse>
                    </Grid>
                    <Grid item xs={0} sm={2}></Grid>
                </Grid>
    </Navbar>

    )
    }


    render() {
        return this.displayNavbar();
    }

}


export default NavbarZT;
