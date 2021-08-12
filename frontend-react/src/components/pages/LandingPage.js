import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Image from "../../resources/background.jpg"


import NavbarZT from '../navbar/NavbarZT';
import SmallCard from "../SmallCard";


const styles = {


    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '25em',
        width: '100%',
        backgroundPosition: 'right',
    },

    searchBox: {
        width: '50%',
        backgroundColor: 'white',
    },
};


class LandingPage extends React.Component {

    display() {
        return (
            <div>
                <Grid container direction="column">
                    <Grid item>
                        <NavbarZT/>
                    </Grid>

                    <Grid item container xs={12} direction="row">
                        <Grid item xs={12}>
                            <Paper style={styles.paperContainer}>
                                <Grid item style={{height: '10em'}}> </Grid>

                                <Grid item container style={{height: '8em'}}>
                                    <Grid item xs={1} xm={4}/>
                                    <Grid item xs={8} xm={4}>
                                        <Typography variant='h4' align='left'>ZróbTO z nami. Szukaj zlecaj i rozwijaj
                                            się.</Typography>
                                        <Typography variant='h4' align='left'>Najlepsi specjaliści dla Twojego
                                            biznesu.</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={12}>
                                    <Grid item xs={1} xm={4}/>
                                    <Grid item xs={10} xm={8}>
                                        <TextField style={styles.searchBox}>
                                            variant="standard"
                                            label="Czego szukasz? Spróbuj “logo dla mojej firmy”"
                                        </TextField>
                                        <Button size="small" variant="contained" color="primary">
                                            Szukaj
                                        </Button>
                                    </Grid>
                                    <Grid item xs={1} xm={4}/>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item/>
                    <Grid item style={{height: '5em'}}> </Grid>
                    <Grid item xs={2}/>
                    <Grid item container xs={12}>
                        <Grid item xs={0} sm={2}/>
                        <Grid container xs={12} sm={8} spacing={4} justify="space-evenly">
                            <Grid item>
                                <SmallCard/></Grid>
                            <Grid item>
                                <SmallCard/></Grid>
                            <Grid item>
                                <SmallCard/></Grid>
                            <Grid item>
                                <SmallCard/></Grid>
                            <Grid item>
                                <SmallCard/></Grid>
                        </Grid>
                        <Grid item xs={0} sm={2}/>

                    </Grid>
                </Grid>
            </div>
        )
    }


    render() {
        return this.display();
    }

}


export default LandingPage;


