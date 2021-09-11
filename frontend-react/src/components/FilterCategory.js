import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";

class FilterCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            defautl : "all",
        }
        //this.handler = this.handler.bind(this);

    }

    handleChange = (event) => {
        const categoryName = event.target.value;
        console.log(event.target.name +"="+categoryName )
        this.props.action(categoryName)
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
            </div>
        )
    }
}

export default FilterCategory