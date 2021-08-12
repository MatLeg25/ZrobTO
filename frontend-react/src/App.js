import './App.css';
import React from 'react';
import LandingPage from "./components/pages/LandingPage";
import Offers from "./components/pages/Offers"
import OfferDetails from "./components/pages/OfferDetails"
import {createTheme, ThemeProvider} from "@material-ui/core";

//Routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SubCategoryPage from './components/pages/SubCategoryPage';
import NotFound from './components/pages/NotFound';
import OfferManager from './components/pages/OfferManager'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1DBF73',
            secondary: '#03543F',
            contrastText: 'white',
        }
    }
})


const App = () => (
  <Router>
    
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path='/home'><LandingPage /></Route> 
            <Route path='/category/:catID/subCategory/:subCatID?'> <SubCategoryPage /></Route>
            <Route path='/offer/:offerID'> <OfferDetails /></Route>
            <Route path='/offerManager'><OfferManager /></Route>
            <Route path="/offers"><Offers/></Route>
            <Route path="/*"><NotFound /></Route>
          </Switch>
        </ThemeProvider>
  </Router>
    );



export default App;
