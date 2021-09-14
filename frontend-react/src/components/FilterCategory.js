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

    dispSubCat() {
        console.log(this.state.subcategories)
        return <p>{this.state.subcategories}</p>
    } 

    handleChange = (event) => {
        const categoryName = event.target.value;
        console.log(event.target.name +"="+categoryName )

        axios.get('http://localhost:8080/offer/price?minPrice='+ 120 +'&maxPrice=' + 150)
        .then(response => response.data)
        .then(data => {
            this.props.setOffers(data) //SET PARENT STATE FROM CHILD
        });
    }

    render() {
        return (
            <div>
           <FormControl variant="outlined" className="emt">
                <InputLabel htmlFor="outlined-category-native-simple">Category</InputLabel>
                <Select
                    native
                    value={this.state.default}
                    onChange={this.handleChange}
                    label="Category"
                    inputProps={{
                        name: 'category',
                        id: 'outlined-min-price-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                </Select>
            </FormControl>
aaa
{this.state.categories}
bb
{this.state.subcategories}
ccx
<br />
{this.dispSubCat()}
fff
            </div>
        )
    }
}

export default FilterCategory