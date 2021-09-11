import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import axios from "axios";

class Child extends React.Component {
    render() {
        return (
            <div>
                {/* The button will execute the handler function set by the parent component */}
                <Button onClick={() => this.props.action("ffff")} >YYYYM </Button>
            </div>
        )
    }
}

export default Child