import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from 'react-router-dom/Link';

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import EditIcon from '@material-ui/icons/Edit';
import DvrIcon from '@material-ui/icons/Dvr';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PagesIcon from '@material-ui/icons/Pages';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

//////////////////////////////////////////////////////////////////////////

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(1);
  const [subcategories, setSubcategories] = React.useState([]);


  const handleChange = (event, newValue) => {
    setValue(newValue);

    axios.get('http://localhost:8080/subcategory/category?categoryId='+(newValue+1))
      .then(response => response.data)
      .then(data => {
          setSubcategories(data)
    })
  }


  const handleChangeIndex = (index) => {
    setValue(index);
  };

  //TODO: rethink data format for category: [name<=>icon<=>subcats]
  const categoriesName = [
      "Design",
      "Digital Marketing",
      "Photo and Video",
      "Programming",
      "Other"];
  const categoriesIcon = [<EditIcon />,<AssessmentIcon />, <PhotoCameraIcon />,<DvrIcon />, <PagesIcon />];


  const categoryNameTAB = categoriesName.map((name, index) =>
    <Tab label={name} {...a11yProps({index})} icon={categoriesIcon[index]} key={"categoryName-"+index}/>
  );

    // passing an empty array as second argument triggers the callback in useEffect
    // only after the initial render thus replicating `componentDidMount` lifecycle behaviour
  useEffect(() => {
    axios.get('http://localhost:8080/subcategory/category?categoryId='+2)
      .then(response => response.data)
      .then(data => {
          setSubcategories(data)
      })
  }, []);



  function getSubcategories(categoryIndex) {
    categoryIndex=categoryIndex+1; //in DB catgory starts with ID=1

    const numItemsPerRow = 3;
    const containerStyle = { 
      display: "flex", 
      width: "100%", 
      flexWrap: "wrap" 
    };

    const itemStyle = {
      minWidth: `${100 / numItemsPerRow}%`,
      textAlign: "center",
      padding: "2%",
      boxSizing: "border-box",
      color: "teal"
    };

  
    let subcategoriesList = [];

    {subcategories.map((subcategory) =>
      subcategoriesList.push(
        <Link to={'/category/'+categoryIndex+'/subCategory/'+subcategory.id} style={itemStyle}>{subcategory.name}</Link>
      )
    )}

    return <Grid item xs={12} style={containerStyle}>{subcategoriesList}</Grid>
  }



  function getCategoriesTABPanel() {
    const categoriesList =[];
    for(let CatIndex=0;CatIndex<categoriesName.length;CatIndex++) {
      categoriesList.push(
          <TabPanel value={value} index={CatIndex} dir={theme.direction}>
            <Grid container spacing={6} direction="column" alignItems='center' alignItems="center">

              <Grid item xs={12} container spacing={3} direction="column" alignItems='center' justifyContent='center' minHeight="100vh" item="true">
                    {getSubcategories(value)}
              </Grid>

            </Grid>
          </TabPanel>
        )
    }
    return categoriesList;

  }



  return (
    // style={{  position: 'absolute',top: '1vw',right: '-3vw', border: '1px solid #e0e0e0'}}
    <div className={classes.root}  >
      <AppBar position="static" 
      color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant= "fullWidth" //"scrollable"
          aria-label="full width tabs example"
        >

        {categoryNameTAB}
        
        </Tabs>
      </AppBar>
        {getCategoriesTABPanel()}
    </div>
  );
}
