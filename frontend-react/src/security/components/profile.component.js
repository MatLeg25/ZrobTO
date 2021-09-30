import React, { Component } from "react";
import AuthService from "../services/auth-service";
import Link from 'react-router-dom/Link';
import NavbarZT from "../../components/navbar/NavbarZT";
import { Typography } from "@material-ui/core";
import { Avatar } from "@mui/material";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    render() {
        const { currentUser } = this.state;

        return (
            <>
            <NavbarZT />
            <br /><br />
            <div className="container">
                <Typography style={{color:"grey", backgroundColor: "#def7ec", textAlign: "center",  padding: "10px"}}>
                <header>
            
                        <Avatar
                        style= {{marginLeft: "auto", marginRight: "auto"}}
                        alt="Avatar"
                        //src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                        />
                    <h3>
                        <strong>{currentUser.username}</strong> 
                    </h3>
                </header>
                </Typography>
                <p>
                    <strong>Token:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <p>
                    <strong>Id:</strong>{" "}
                    {currentUser.id}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>

                <hr />
                <strong>Actions: </strong>
                <ul>
                    <Link to={'/offermanager'}>Manage my offers</Link>
                </ul>
                <ul>
                    <Link to={'/home'}>Go to home page</Link>
                </ul>
            </div>
            </>
        );
    }
}