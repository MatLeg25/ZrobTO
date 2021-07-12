//import './App.css';
import React, {Component, useState} from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import {Checkbox, FormControl, FormControlLabel, FormGroup} from "@material-ui/core";
import NavbarZT from './Navbar/NavbarZT';

class LandingPage extends React.Component {

    display() {
        return (
            <div>
                <NavbarZT />
            <div> Landing Page</div>

            {/* <FormControl component="fieldset">
                    <FormLabel component="legend">Label Placement</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="top"
                            control={<Checkbox color="secondary" />}
                            label="Top"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="start"
                            control={<Checkbox color="primary" />}
                            label="Start"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="bottom"
                            control={<Checkbox color="primary" />}
                            label="Bottom"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="End"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl> */}


            </div>
        )
    }


    render() {
        return this.display();
    }

}


export default LandingPage;
