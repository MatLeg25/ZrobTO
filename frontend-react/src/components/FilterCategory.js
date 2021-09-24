import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";

import { GetCategoriesNames, GetSubcategoriesNames } from './UTIL'

class FilterCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            defautl : "all",
            categories : GetCategoriesNames(),
            subcategories : GetSubcategoriesNames(),
        }

    }


    handleChange = (event) => {
        const categoryID = event.target.value;
        console.log(categoryID)

        axios.get('http://localhost:8080/offer/category/'+categoryID)
        .then(response => response.data)
        .then(data => {
            this.props.setOffers(data) //SET PARENT STATE FROM CHILD
        });
    }

    render() {
        return (
            <div>
           <FormControl variant="standard" className="emt" color="primary">
                <InputLabel htmlFor="uncontrolled-native">Category</InputLabel>
                <NativeSelect
                    value={this.state.default}
                    onChange={this.handleChange}
                    label="Category"
                    inputProps={{
                        name: 'category',
                        id: 'outlined-category-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={1}>Grafika i design</option>
                    <option value={2}>Digital marketing</option>
                    <option value={3}>Foto i wideo</option>
                    <option value={4}>Programowanie</option>
                    <option value={5}>Pozostałe</option>
                </NativeSelect>
            </FormControl>


            </div>
        )
    }
}

export default FilterCategory