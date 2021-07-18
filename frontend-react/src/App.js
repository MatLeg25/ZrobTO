import './App.css';
import React, {} from 'react';  
import LandingPage from "./LandingPage";
import Offers from "./components/pages/Offers"
import {createTheme, ThemeProvider} from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DBF73',
      secondary: '#03543F',
      contrastText: 'white',
    }
  }
})


class App extends React.Component {
  constructor() {
    super();
    this.state={
    }

  }



  render() {
    return (
        <ThemeProvider theme={theme}>
      <div>
        <Offers/>
      </div>
        </ThemeProvider>
    );
  }
}


export default App;
