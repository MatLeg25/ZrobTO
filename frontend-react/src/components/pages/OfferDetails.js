import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import NavbarZT from "../navbar/NavbarZT";
import Grid from "@material-ui/core/Grid";
import {Card, CardActionArea, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Autorenew, Schedule} from "@mui/icons-material";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 300,
    },
});

export default function OfferDetails(props) {

    const classes = useStyles();


    // We can use the `useParams` hook here to access the dynamic pieces of the URL.
    let {offerID} = useParams();

    const [offer, setOffer] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/offer/' + offerID)
            .then(response => response.data)
            .then(data => {
                setOffer({
                    id: data.id,
                    user_id: data.user_id,
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    deliveryTime: data.deliveryTime,
                    revisions: data.revisions,
                    fileUrl: data.fileUrl,
                    subcategory_id: data.subcategory_Id,
                    subcategoryName: data.subcategoryName,
                })
            })
    }, []);

    console.log(offer)

    return (
        <div>
            <div>
                <NavbarZT/>
            </div>
            <div>
                <Grid container spacing={10} direction="column">
                    <Grid item xs={12}/>
                    <Grid container>
                        <Grid item xs={1} xm={2}/>
                        <Grid item xs={10} xm={8}>
                            <h2>{offer.title}</h2>
                        </Grid>
                    </Grid>
                        <Grid item container spacing={3}>
                            <Grid item xs={1} xm={2}/>
                            <Grid item xs={5} xm={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={offer['fileUrl']}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={5} xm={4}>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                <Typography>
                                    <h5>Cena pakietu: {offer.price} zł</h5>
                                </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            <h6>{offer.description}</h6>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            <Schedule/> Czas wykonania:
                                            <h6>{offer.deliveryTime}</h6>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            <Autorenew/> Liczba poprawek:
                                            <h6>{offer.revisions}</h6>
                                        </Typography>
                                    </Grid>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
            </div>
        </div>
    );
}

