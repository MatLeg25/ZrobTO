import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";

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
        minPrice: 0,
        maxPrice: 1000000,
    });

    const handleChange = (event) => {
        // const name = event.target.name;
        // console.log(name)

        const name = event.target.name;

        if (name === "minPrice") {
            setState({
                minPrice: event.target.value,
                maxPrice: state.maxPrice
            });
        } else {
            setState({
                maxPrice: event.target.value,
                minPrice: state.minPrice
            })
        }

        console.log("Target value= "+event.target.value)
        console.log("minPrice= "+state.minPrice)
        console.log("maxPrice= "+state.maxPrice)


        axios.get('http://localhost:8080/offer/price?minPrice='+ state.minPrice +'&maxPrice=' + state.maxPrice)
                .then(response => response.data)
                .then(data => {
                    console.log(data)
                    //setState({offers: data});
                });

        console.log("===========")        
    };


    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-min-price-native-simple">Min Price</InputLabel>
                <Select
                    native
                    value={state.minPrice}
                    onChange={handleChange}
                    label="Minimal Price"
                    inputProps={{
                        name: 'minPrice',
                        id: 'outlined-min-price-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={0}>0</option>
                    <option value={100}>100</option>
                    <option value={150}>150</option>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-max-price-native-simple">Max Price</InputLabel>
                <Select
                    native
                    value={state.maxPrice}
                    onChange={handleChange}
                    label="Max Price"
                    inputProps={{
                        name: 'maxPrice',
                        id: 'outlined-max-price-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={100}>100</option>
                    <option value={150}>150</option>
                    <option value={200}>200</option>
                </Select>
            </FormControl>
            <h3>{state.minPrice}</h3>
            <h3>{state.maxPrice}</h3>
            

        </div>
    );

    
}
