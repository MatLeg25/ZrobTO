import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
        minPrice: '',
        maxPrice:'',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        console.log(event.target.value)
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
                    <option value={200}>200</option>
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
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                </Select>
            </FormControl>

        </div>
    );
}
