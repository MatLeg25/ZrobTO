import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import EditIcon from '@material-ui/icons/Edit';
import DvrIcon from '@material-ui/icons/Dvr';
import AssessmentIcon from '@material-ui/icons/Assessment';



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



export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

///////////////////////////////////
//TODO: rethink data format for category: [name<=>icon<=>subcats]
const categoriesName = ["Grafika i Design", "Digital Marketing", "Foto i wideo", "Programowanie"];
const categoriesIcon = [<EditIcon />,<AssessmentIcon />, <PhotoCameraIcon />,<DvrIcon />];
const subCategories = [             
    ["Logo i marketing wizerunkowy","Projekt logo","Wizytówki","Design stylu marki"],
    ["Web i App Design","Web Design","App Design","Landing Page Design","UX Design","Design Banerów","Design ikon"],
    ["Design druku","Ulotki","Broszury","Plakaty","Katalogi","Menu","Zaproszenia"],
    []
];
const subCategories0 = [             
    "SubCatTitle1","SubCat1a","SubCat1b","SubCat1c",
    "SubCatTitle2","SubCat2a","SubCat2b","SubCat2c","SubCat2d",
    "SubCatTitle3","SubCat3a","SubCat3b","SubCat3c",
];

const allSubCats = [subCategories0, subCategories0,subCategories0, subCategories0]

const categoryNameTAB = categoriesName.map((name, index) =>
  <Tab label={name} {...a11yProps({index})} icon={categoriesIcon[index]} key={"categoryName-"+index}/>
    );


function podziel(array, column) {
  console.log("podzielSTART")
  let arr2D = [];
  let tmp =[];
  let counter=0;
  for(let x=0;x<array.length;x++) {
    if(counter<3) {
      tmp.push(arr2D[x]);
    }

    counter=0;
    x--;
    tmp=[];
  }

  console.log(arr2D);
}


function getSubCategories(categoryIndex) {
  let elem=[];

  // const elements = [1, 2, 3, 4, 5, 6, 7, 8];
  // //podziel(elements, 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]

  //console.log(chunked)

  {allSubCats[categoryIndex].map((name, index) =>
    elem.push(
      <Link to={'category/'+categoryIndex+'/subCategory/'+index} style={{color: "teal"}}>{name}<br /></Link>
    )
)}

  return <Grid item xs={6} >{elem}</Grid>
}


function getCategoriesTABPanel() {
  const elems =[];
  for(let CatIndex=0;CatIndex<categoriesName.length;CatIndex++) {
        elems.push(
        <TabPanel value={value} index={CatIndex} dir={theme.direction}>
          <Grid container spacing={6} direction="column" alignItems='center' alignItems="center">

            <Grid item xs={12} container spacing={3} direction="column" alignItems='stretch' justifyContent='center' minHeight="100vh" item="true">
                  {getSubCategories(value)}
            </Grid>

          </Grid>
        </TabPanel>
      )
  }
  return elems;

}

  /////////////////////////////////////

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
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
