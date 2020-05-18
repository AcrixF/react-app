import React, { Component } from "react";

export default class Footer extends Component {

    render() {
        return(
            <footer>&copy; Codejobs {(new Date()).getFullYear()}</footer>
        );
    }

}