import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Modal from '@material-ui/core/Modal';
import OfferForm from "../offerManager/OfferForm"
import AddOffer from "../offerManager/AddOffer"


const useStyles = makeStyles({
    root: {
        maxWidth: 414,
    },
    media: {
        height: 168,
    },
});

const styles = theme => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 648,
      padding: '0 30px',
    },
  });


class OfferCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show:false,
        offers : [],
        offer : props.offer,
        }
        console.log(props.offer.fileUrl)
    }

    getOfferById(props) {
        axios.get('http://localhost:8080/offer/'+props)
          .then(response => response.data)
         // .then(data => JSON.stringify(data))
          .then(data => {
             //this.setState({ offers: data });
            console.log(data);
            return data; //could be directly from this.state: 'return this.offers[props]'
        });
      }
    
    
    deleteOffer(props) {
    
        let param = 'id='+props;
        
        fetch('http://localhost:8080/offer?'+param, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(() => {window.location.reload(false)}) //{ this.getAllOffers()}) // reload from DB after delete
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    
    
    updateOffer(props) {
    
        alert("Details in console, offer ID="+props)
    
        return <OfferForm/>
    
      }

      getNewOfferPlaceholders() {
        return ({
          title: "Enter title",
          description: "Enter description",
          deliveryTime: "Enter delivery time",
          revisons: "Enter revisons",
          price: "Enter price"
    
        })
      }


    render() {
    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    className = {styles.root}
                    image={this.state.offer.fileUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.state.offer.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.offer.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={"offer/" + this.state.offer.id}>
                    Show details
                </Button>
                <Button size="small" color="primary" onClick={() => {this.updateOffer(this.state.offer.id)}}>
                    EDIT <AddOffer data={this.getNewOfferPlaceholders()} />
                </Button>
                <Button size="small" color="primary" onClick={() => {this.deleteOffer(this.state.offer.id)}}>
                    DELETE
                </Button>
            </CardActions>
        </Card>
        );
    }
}

export default OfferCard;

