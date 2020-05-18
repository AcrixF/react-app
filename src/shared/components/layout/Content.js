import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Content extends Component {

    static propTypes = {
      children: PropTypes.element.isRequired
    };

    render() {
        const { children } = this.props;

        return(
            <main>
                { children }
            </main>
        )
    }

}