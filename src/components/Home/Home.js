import React, { Component } from "react";
import './Home.css';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Cristian'
        }
    }

    componentDidMount = () => {
        setTimeout(() => { this.setState({name:'Cristina'})}, 2000);
    }

    render = () =>
        <div className="Home">
            <p>Hi my name is {this.state.name}</p>
        </div>

}