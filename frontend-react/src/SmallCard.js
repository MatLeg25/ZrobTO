import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SmallImage from './resources/small-card-image.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 185,
        display: "inline-flex",
        margin: "2%"
    },
    media: {
        height: 185,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={SmallImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Usługa
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Opis opis opis opis
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
