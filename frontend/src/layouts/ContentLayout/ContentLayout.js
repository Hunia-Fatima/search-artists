import React, { Component } from "react";
import './content-layout.scss'

export default class ContentLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='content-layout'>
                {this.props.children}
            </div>
        );
    }
}
