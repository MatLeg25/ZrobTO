import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Box from '@material-ui/core/Box';
import Container from 'react-bootstrap/Container'
import Link from 'react-router-dom/Link';

import Categories from './Categories';
import logoImg from '../../resources/logo.png';
import AuthService from "../../security/services/auth-service";

class NavbarZT extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    logOut() {
        AuthService.logout();
    }
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

        const {currentUser, showModeratorBoard, showAdminBoard} = this.state;


        return (

            <Navbar bg="light" expand="lg" sticky="top">
            {logo}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
              {categories}
                <Nav.Link href="#home">Zostań sprzedawcą</Nav.Link>
                {/*<Nav.Link href="http://localhost:3000/login">Zaloguj się</Nav.Link>*/}
                {/*<Button variant="outline-success" href="http://localhost:3000/registration">DOŁĄCZ</Button>*/}
                  {currentUser ? (
                      <div className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <Link to={"/profile"} className="nav-link">
                                  <b> {currentUser.username} </b>
                              </Link>
                          </li>
                          <li className="nav-item">
                              <a href="/login" className="nav-link" onClick={this.logOut}>
                                  Wyloguj
                              </a>
                          </li>
                      </div>
                  ) : (
                      <div className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <Link to={"/login"} className="nav-link">
                                  Zaloguj
                              </Link>
                          </li>

                          <li className="nav-item">
                              {/*<Link to={"/register"} className="nav-link">*/}
                                  <Button variant="outline-success" href="http://localhost:8081/register">DOŁĄCZ</Button>

                              {/*</Link>*/}
                          </li>
                      </div>
                  )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
            )
          }


          render() {
        return this.displayNavbar();
    }

}


export default NavbarZT;
