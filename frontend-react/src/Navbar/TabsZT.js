import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
    width: 500,
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
  <Tab label={val} {...a11yProps({index})} icon={categoriesIcon[index]}/>
  );
  return <div>{listItems}</div>;
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


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="full width tabs example"
          centered
          width='1000px'
        >

        {/* //TODO in loop */}
        {el}
        <Tab label={categoriesName[0]} {...a11yProps(0)} icon={<EditIcon />} />
        <Tab label={categoriesName[1]} {...a11yProps(1)} icon={<AssessmentIcon />}/>
        <Tab label={categoriesName[2]} {...a11yProps(2)} icon={<PhotoCameraIcon />}/>
        <Tab label={categoriesName[3]} {...a11yProps(3)} icon={<DvrIcon />}/>



          {/* <Tab label={categoriesName[0]} {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
        <p>{subCategories[0][0]}</p> 
          <p> {subCategories[0][1]}</p> 
          <p> {subCategories[0][3]}</p> 
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            {subCategories[1]}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            {subCategories[2]}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            {subCategories[3]}
        </TabPanel>
 
    </div>
  );
}
