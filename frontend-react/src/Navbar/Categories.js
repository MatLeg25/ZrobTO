import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Box from '@material-ui/core/Box';

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
            subCategories1 : {}
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
            SubCatList.push(
                            <Nav.Link href={"#SubCategory-"+index+"/"+SubCatList.length} key={"#SubCategory-"+index+"/"+SubCatList.length}>{subCat}</Nav.Link>
            )
        }

        return  SubCatList;
    }


    displayCategories() {
    const categoryName = this.state.categoriesName.map((category, index) =>
        <Tab fill variant="tabs" eventKey={"categoryName-"+index} title={category} key={"categoryName-"+index} >
            <Nav className="flex-sm-column" key={"categoryName-"+index} fill variant="tabs">
                {this.getSubCategories(index)}
            </Nav>
        </Tab>
    );

    return (
            <Tabs defaultActiveKey="categoryName-1" fill variant="tabs" >
                {categoryName}
            </Tabs>
      )
    }


    render() {
        return this.displayCategories();
    }

}


export default Categories;