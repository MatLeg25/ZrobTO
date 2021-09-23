// import './App.css';
// import React from 'react';
// import LandingPage from "./components/pages/LandingPage";
// import Offers from "./components/pages/Offers"
// import OfferDetails from "./components/pages/OfferDetails"
// import OfferUpdate from "./components/pages/OfferUpdate"
// // import UserRegistration from "./components/pages/UserRegistration"
// // import UserSignIn from "./components/pages/UserSignIn"
// // import {createTheme, ThemeProvider} from "@material-ui/core";
//
// //Routing
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//
// import SubCategoryPage from './components/pages/SubCategoryPage';
// import NotFound from './components/pages/NotFound';
// import OfferManager from './components/pages/OfferManager';
//
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#1DBF73',
//             secondary: '#03543F',
//             contrastText: 'white',
//         }
//     }
// })
//
// document.title = "ZróbTO";
//
// const App = () => (
//   <Router>
//         <ThemeProvider theme={theme}>
//           <Switch>
//             <Route path="/registration"><UserRegistration /></Route>
//             <Route path="/login"><UserSignIn /></Route>
//             <Route path='/home'><LandingPage /></Route>
//             <Route path='/category/:catID/subCategory/:subCatID?'> <SubCategoryPage /></Route>
//             <Route path='/offer/:offerID'> <OfferDetails /></Route>
//             <Route path='/offer-update/:offerID'> <OfferUpdate /></Route>
//             <Route path='/offerManager'><OfferManager /></Route>
//             <Route path="/offers"><Offers/></Route>
//             <Route path="/*"><NotFound /></Route>
//           </Switch>
//         </ThemeProvider>
//   </Router>
//     );
//
//
//
// export default App;


import React, {Component} from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./security/services/auth-service";

import Login from "./security/components/login.component";
import Register from "./security/components/register.component";
import Home from "./security/components/home.component";
import Profile from "./security/components/profile.component";
import BoardUser from "./security/components/board-user.component";
import BoardModerator from "./security/components/board-moderator.component";
import BoardAdmin from "./security/components/board-admin.component";

import LandingPage from "./components/pages/LandingPage";
import Offers from "./components/pages/Offers"
import OfferDetails from "./components/pages/OfferDetails"
import OfferUpdate from "./components/pages/OfferUpdate"
import SubCategoryPage from './components/pages/SubCategoryPage';
import NotFound from './components/pages/NotFound';
import OfferManager from './components/pages/OfferManager';

class App extends Component {
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

    render() {
        const {currentUser, showModeratorBoard, showAdminBoard} = this.state;

        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/"} className="navbar-brand">
                        bezKoder
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
                        </li>

                        {showModeratorBoard && (
                            <li className="nav-item">
                                <Link to={"/mod"} className="nav-link">
                                    Moderator Board
                                </Link>
                            </li>
                        )}

                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link">
                                    Admin Board
                                </Link>
                            </li>
                        )}

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/user"} className="nav-link">
                                    User
                                </Link>
                            </li>
                        )}
                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route path="/user" component={BoardUser}/>
                        <Route path="/mod" component={BoardModerator}/>
                        <Route path="/admin" component={BoardAdmin}/>

                        <Route path='/landing'><LandingPage/></Route>
                        <Route path='/category/:catID/subCategory/:subCatID?'> <SubCategoryPage/></Route>
                        <Route path='/offer/:offerID'> <OfferDetails/></Route>
                        <Route path='/offer-update/:offerID'> <OfferUpdate/></Route>
                        <Route path='/offerManager'><OfferManager/></Route>
                        <Route path="/offers"><Offers/></Route>
                        <Route path="/*"><NotFound/></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
