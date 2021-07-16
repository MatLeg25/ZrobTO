import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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


///////////////////////////////////

const categoriesName = ["Grafika i Design", "Digital Marketing", "Foto i wideo", "Programowanie"];
const categoriesIcon = [<EditIcon />,<AssessmentIcon />, <PhotoCameraIcon />,<DvrIcon />];
const subCategories = [             
    ["Logo i marketing wizerunkowy","Projekt logo","Wizytówki","Design stylu marki"],
    ["Web i App Design","Web Design","App Design","Landing Page Design","UX Design","Design Banerów","Design ikon"],
    ["Design druku","Ulotki","Broszury","Plakaty","Katalogi","Menu","Zaproszenia"],
    []
];

function CategoryList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
  <Tab label={val} {...a11yProps({index})} icon={categoriesIcon[index]} key={"category-"+index}/>
  );
  return <div key={"category"}>{listItems}</div>;
  }

  const el = (
    <div>
      <CategoryList data={categoriesName} />
    </div>
  );



/////////////////////////////////////



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

  ////
  const categoriesName = ["Grafika i Design", "Digital Marketing", "Foto i wideo", "Programowanie"];
  const subCategories = [             
      ["Logo i marketing wizerunkowy","Projekt logo","Wizytówki","Design stylu marki"],
      ["Web i App Design","Web Design","App Design","Landing Page Design","UX Design","Design Banerów","Design ikon"],
      ["Design druku","Ulotki","Broszury","Plakaty","Katalogi","Menu","Zaproszenia"],
      []
  ];
  ///

  const listItems = categoriesName.map((val, index) =>
  <Tab label={val} {...a11yProps({index})} icon={categoriesIcon[index]} key={"category-"+index}/>
    );




function getSubCat(SCindex) {
  let f2 = [];  
  {subCategories[SCindex].map((val, index) =>
          {if(index===0) {
            f2.push(<b>{val}</b>)} 
            else {f2.push(<p>{val}</p>)}
          }
        )}
  return <Grid item xs={4}>{f2}</Grid>
}

function getAllSubCategories() {
  const el =[];
  for(let subCatIndex in subCategories) {
      el.push(getSubCat(subCatIndex))
  }
  return el;
}


function getCategories() {
  const el =[];
  for(let CatIndex=0;CatIndex<categoriesName.length;CatIndex++) {
      el.push(
        <TabPanel value={value} index={CatIndex} dir={theme.direction}>
          <Grid container spacing={6} direction="column">

            <Grid item xs={12} container>
                  {getAllSubCategories()}
            </Grid>

          </Grid>
        </TabPanel>
      )
  }
  return el;

}

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

        {listItems}
        
        </Tabs>
      </AppBar>

      {getCategories()}

 
    </div>
  );
}
