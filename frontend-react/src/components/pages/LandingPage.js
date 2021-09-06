import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Image from "../../resources/background.jpg"


import NavbarZT from '../navbar/NavbarZT';
import SmallCard from "../SmallCard";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import LogoDesign from "../../resources/logo-design.jpg"
import PortraitPhoto from "../../resources/portrait.jpg"
import Shop from "../../resources/shop.jpg"
import SocialMedia from "../../resources/social.jpg"
import Video from "../../resources/video.jpg"


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

    root: {
        maxWidth: 185,
        display: "inline-flex",
        margin: "2%"
    },
    media: {
        height: 185,
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
                    <Grid item style={{height: '3em'}}/>

                    <Grid item style={{height: '4em'}}>

                        <Typography variant='h5' align='center'>Popularne usługi</Typography>
                    </Grid>
                    <Grid item xs={2}/>
                    <Grid item container xs={12}>
                        <Grid item xs={0} sm={2}/>
                        <Grid container xs={12} sm={8} spacing={4} justify="space-evenly">
                            <Grid item>
                                <Card className={styles.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            image={LogoDesign}
                                            style={{height: '185px',
                                                width: '185px'}}                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Logo design
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Buduj markę
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item>
                                <Card className={styles.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            image={PortraitPhoto}
                                            style={{height: '185px',
                                                    width: '185px'}}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Portret
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Pokaż się
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </Grid>
                            <Grid item>
                                <Card className={styles.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            image={Shop}
                                            style={{height: '185px',
                                                width: '185px'}}                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Sklep
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Sprzedawaj w internecie
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={styles.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            image={SocialMedia}
                                            style={{height: '185px',
                                                width: '185px'}}                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Social Media
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Dotrzyj do klientów
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </Grid>
                            <Grid item>
                                <Card className={styles.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            image={Video}
                                            style={{height: '185px',
                                                width: '185px'}}                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Montaż wideo
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Pokaż swoje zaangażowanie
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </Grid>
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


