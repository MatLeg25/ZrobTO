import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import GetSubCategories from './offerManager/GetSubCategories';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        offers: [],
        Category: 0,
        categories: [],
    });


    function getAllCategories() {
        axios.get('http://localhost:8080/category')
        .then(response => response.data)
        .then(data => {
           setState({ categories: data });
          console.log(data);
      });
    }

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        console.log(name);
        console.log(value);

            setState({
                Category: state.Category
                })        
        // axios.get('http://localhost:8080/offer/price?minPrice='+ state.minPrice +'&maxPrice=' + state.maxPrice)
        //         .then(response => response.data)
        //         .then(data => {
        //             console.log(data)
        //             // setState({offers: [data]});
        //         });
    };

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-min-price-native-simple">Category</InputLabel>
                <Select
                    native
                    value={state.Category}
                    onChange={handleChange}
                    label="Minimal Price"
                    inputProps={{
                        name: 'Category',
                        id: 'outlined-min-price-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={1}>category1</option>
                    <option value={2}>category2</option>
                    <option value={3}>category3</option>
                </Select>
            </FormControl>

            {state.Category}
        </div>
    );
}
