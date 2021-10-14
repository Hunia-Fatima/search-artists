import React, { Component } from "react";
import './event-card.scss';
import { Link } from 'react-router-dom';
import WhiteImage from '../../assets/white.png';
import { ROUTES } from '../../constants';
const { ARTIST_DETAIL } = ROUTES

export default class EventCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const date = new Date(this.props.date);
        return (
            <div className='event-card'>
                <h2 className='event-card__heading'>Event Details</h2>
                <div className='event-card__row'>
                    <div className='event-card__row__section'>
                        <p className='event-card__row__section__heading'>Country</p>
                        <p>{this.props.venue && this.props.venue.country}</p>
                    </div>
                    <div className='event-card__row__section'>
                        <p className='event-card__row__section__heading'>City</p>
                        <p>{this.props.venue && this.props.venue.city}</p>
                    </div>
                </div>
                <div className='event-card__row'>
                    <div className='event-card__row__section'>
                        <p className='event-card__row__section__heading'>Venue</p>
                        <p>{this.props.venue.name}</p>
                    </div>
                    <div className='event-card__row__section'>
                        <p className='event-card__row__section__heading'>Date</p>
                        <p>{date.toDateString()}</p>
                    </div>
                </div>
            </div>
        );
    }
}

