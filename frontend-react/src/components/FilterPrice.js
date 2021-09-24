import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import Button from "@material-ui/core/Button";

class FilterPrice extends React.Component {
    constructor() {
        super();
        this.state = {
            minPrice : 0,
            maxPrice : 1000000,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = (event) => {

        const name = event.target.name;

        if (name === "minPrice") {
            this.setState({
                minPrice: event.target.value,
                maxPrice: this.state.maxPrice
            });
        } else {
            this.setState({
                maxPrice: event.target.value,
                minPrice: this.state.minPrice
            })
        }
    }


    onSubmit() {
        console.log("FILTER: price | minPrice= "+this.state.minPrice +", maxPrice= "+this.state.maxPrice)
        axios.get('http://localhost:8080/offer/price?minPrice='+ this.state.minPrice +'&maxPrice=' + this.state.maxPrice)
        .then(response => response.data)
        .then(data => {
            this.props.setOffers(data) //SET PARENT STATE FROM CHILD
        });   
    }

    render() {
        return (
            <div>
                <Button onClick={this.onSubmit}>Filtruj </Button>
                <FormControl variant="standard">
                    <InputLabel htmlFor="uncontrolled-native"></InputLabel>
                    <Select
                        native
                        value={this.state.minPrice}
                        onChange={this.handleChange}
                        label="Minimalna cena"
                        inputProps={{
                            name: 'minPrice',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={0}>0</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={150}>150</option>
                        <option value={200}>200</option>
                        <option value={250}>250</option>
                    </Select>
                    </FormControl>

                    <FormControl variant="standard" >
                    <InputLabel htmlFor="outlined-max-price-native-simple"></InputLabel>
                    <Select
                        native
                        value={this.state.maxPrice}
                        onChange={this.handleChange}
                        label="Maksymalna cena"
                        inputProps={{
                            name: 'maxPrice',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={150}>150</option>
                        <option value={200}>200</option>
                        <option value={250}>250</option>
                        <option value={300}>300</option>
                        <option value={''}>MAX</option>
                    </Select>
                </FormControl>

            </div>
        );
    }
            
}

export default FilterPrice