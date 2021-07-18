import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";


import NavbarZT from "../../Navbar/NavbarZT";
import BigCard from "../BigCard"


class Offers extends React.Component {


    display() {
        return (
            <div>
                <div>
                    <NavbarZT/>
                </div>

                <div>
                    <Grid container spacing={3} direction="column">
                        <Grid item xs={12}>
                            Blank
                        </Grid>
                        <Grid item xs={12}>
                            <h2>
                                Logo design
                            </h2>
                        </Grid>
                        <Grid item xs={12} container spacing={2}>
                            <Grid item xl={2}><Button variant="outlined" color="primary" size="small">Minimalistyczne</Button></Grid>
                            <Grid item xl={2}><Button variant="outlined" color="primary" size="small">3D</Button></Grid>
                            <Grid item xl={2}><Button variant="outlined" color="primary" size="small">Retro</Button></Grid>
                            <Grid item xl={2}><Button variant="outlined" color="primary" size="small">Geometryczne</Button></Grid>
                            <Grid item xl={2}><Button variant="outlined" color="primary" size="small">Pokaż wszystkie</Button></Grid>

                        </Grid>
                        <Grid item xs={12}>
                            Blank
                        </Grid>



                        <Grid item xs={12} container spacing={4}>
                        <Grid item xl={3}> <BigCard/> </Grid>
                        <Grid item xl={3}> <BigCard/> </Grid>
                        <Grid item xl={3}> <BigCard/> </Grid>
                        </Grid>




                    </Grid>
                </div>
            </div>
        )
    };

    render() {
        return this.display();
    }
};

export default Offers;
