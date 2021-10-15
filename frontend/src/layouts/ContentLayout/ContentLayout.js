import React, { Component } from "react";
import './content-layout.scss'

// for layout and the content that is consistent on each page (page title etc)
export default class ContentLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='content-layout'>
                <div className='content-layout__child'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
