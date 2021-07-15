import React from 'react';
import Nav from 'react-bootstrap/Nav'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from 'react-bootstrap/Container';
import { TabContainer } from 'react-bootstrap';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import Box from '@material-ui/core/Box';
import { Component } from 'react';

import TabsZT from './TabsZT'


const styles = {

    categoryDropdown: {
   
        backgroundColor: 'white',
  
    },

};

class Categories extends React.Component {
    constructor() {
        super();

        this.state = {
            categoriesName : ["Grafika i Design", "Digital Marketing", "Foto i wideo", "Programowanie"],
            subCategories : [             
               ["Logo i marketing wizerunkowy","Projekt logo","Wizytówki","Design stylu marki"],
                ["Web i App Design","Web Design","App Design","Landing Page Design","UX Design","Design Banerów","Design ikon"],
                ["Design druku","Ulotki","Broszury","Plakaty","Katalogi","Menu","Zaproszenia"],
                []
            ],
            categoryIcons : [PhotoCameraIcon, PhotoCameraIcon],
            subCategories1 : {},
            camera : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
        </svg>),
        }

    }

//works on nested list TODO: rethink works with dictionary (key: list of subcategoriees)
    // componentDidMount() {
    //     const getSubCategories1 = {                
    //         cat1 : ["Logo i marketing wizerunkowy","Projekt logo","Wizytówki","Design stylu marki"],
    //         cat2 : ["Web i App Design","Web Design","App Design","Landing Page Design","UX Design","Design Banerów","Design ikon"],
    //         cat3 : ["Design druku","Ulotki","Broszury","Plakaty","Katalogi","Menu","Zaproszenia"],
    //         cat4 : []
    //     }
    //     this.setState({subCategories1 : getSubCategories1});
    // }


    getSubCategories(index) {
        
        let SubCatList = []

        for (let subCat of this.state.subCategories[index]) {
            if (SubCatList.length==0) {
                        SubCatList.push(
                            <Nav.Link href={"#SubCategory-"+index+"/"+SubCatList.length} 
                                key={"#SubCategory-"+index+"/"+SubCatList.length} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                                    <b>{subCat}</b>
                            </Nav.Link>)
            } else {
                SubCatList.push(
                    <Nav.Link href={"#SubCategory-"+index+"/"+SubCatList.length} 
                        key={"#SubCategory-"+index+"/"+SubCatList.length}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
                            {subCat}
                    </Nav.Link>)
            }
        }

        return  SubCatList;
    }


    displayCategories() {
    const categoryName = this.state.categoriesName.map((category, index) =>
        <Tab eventKey={"categoryName-"+index} title={category} key={"categoryName-"+index} className="flex-sm-column" icon={<PhotoCameraIcon />}>
            {/* <Nav className="flex-sm-column" key={"categoryName-"+index} fill variant="tabs"> */}
                {this.getSubCategories(index)}
            {/* </Nav> */}
        </Tab>
    );

    return (
        <div style={styles.categoryDropdown}>
            <Tabs defaultActiveKey="categoryName-1" fill tabPosition="left">
                {/* {categoryName} */}
                <TabsZT />
            </Tabs>
            
        </div>
      )
    }


    render() {
        return this.displayCategories();
    }

}


export default Categories;