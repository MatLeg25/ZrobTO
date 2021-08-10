import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";


const useStyles = makeStyles({
    root: {
        maxWidth: 414,
    },
    media: {
        height: 168,
    },
});




export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={'http://localhost:8080/files/0f33ee79-2365-4d53-ba50-5dcb8d227a4c'}
                    // image={props.offer['link']}
                    title="Title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.offer['title']}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.offer['description']}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Add to favourites
                </Button>
                <Button size="small" color="primary">
                    Show details
                </Button>
            </CardActions>
        </Card>
    );
}