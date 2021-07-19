import './App.css';
import React, {} from 'react';  
import LandingPage from "./LandingPage";
import Offers from "./components/pages/Offers"
import {createTheme, ThemeProvider} from "@material-ui/core";

//Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SubCategoryPage from './SubCategoryPage';
import NotFound from './NotFound';
import OfferManager from './OfferManager/OfferManager'

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
            <Route path='/category/:catID/subCategory/:subCatNameID/:subCatID?'> <SubCategoryPage /></Route>
            <Route path='/offerManager'><OfferManager /></Route>
            <Route path="/offers"><Offers/></Route>
            <Route path="/*"><NotFound /></Route>
          </Switch>
        </ThemeProvider>
  </Router>
    );



export default App;
