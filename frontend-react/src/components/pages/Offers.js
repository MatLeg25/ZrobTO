import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import axios from "axios";


import NavbarZT from "../../Navbar/NavbarZT";
import BigCard from "../BigCard";


const AllOffers = () => {

    const [allOffers, setOffers] = useState([]);

    const fetchOffers = () => {
        axios.get("http://localhost:8080/offer").then(res => {
            console.log(res);
            setOffers(res.data);
        })
    }

    useEffect(() => {
        fetchOffers()
    }, []);

    return allOffers.map((offer, index) => {

        // uncomment to show offers as smiple html paragraphs at the top of the page

        // return (
        //     // <div key={index}>
        //     //     <h1>{offer.title}</h1>
        //     //     <p>{offer.description}</p>
        //     // </div>
        // )
    })
}


class Offers extends React.Component {

    display() {
        return (
            <div>
                <AllOffers/>
                <div>
                    <NavbarZT/>
                </div>
                <div>
                    <Grid container spacing={10} direction="column">
                        <Grid item xs={12}/>

                        <Grid container>
                            <Grid item xs={1} xm={2}/>
                            <Grid item xs={10} xm={8}>
                                <h2>
                                    All offers</h2>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={1} xm={2}/>
                            <Grid item xs={10} xm={8} container spacing={1}>
                                <Grid item xl={2}><Button variant="outlined" color="primary"
                                                          size="small">Minimalistyczne</Button></Grid>
                                <Grid item xl={2}><Button variant="outlined" color="primary"
                                                          size="small">3D</Button></Grid>
                                <Grid item xl={2}><Button variant="outlined" color="primary" size="small">Retro</Button></Grid>
                                <Grid item xl={2}><Button variant="outlined" color="primary"
                                                          size="small">Geometryczne</Button></Grid>
                                <Grid item xl={2}><Button variant="outlined" color="primary" size="small">Pokaż
                                    wszystkie</Button></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}/>
                        <Grid container>
                            <Grid item xs={1} xm={2}/>
                            <Grid item xs={10} xm={8} container spacing={4} justifyContent={"space-evenly"}>
                                <Grid item xl={3}> <BigCard/> </Grid>
                                <Grid item xl={3}> <BigCard/> </Grid>
                                <Grid item xl={3}> <BigCard/> </Grid>
                            </Grid>
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
