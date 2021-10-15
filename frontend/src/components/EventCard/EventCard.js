import React from "react";
import './event-card.scss';

// representation component for events data
const EventCard = (date, venue) => {

    const dateRender = new Date(date);
    return (
        <div className='event-card'>
            <h2 className='event-card__heading'>Event Details</h2>
            <div className='event-card__row'>
                <div className='event-card__row__section'>
                    <p className='event-card__row__section__heading'>Country</p>
                    <p>{venue && venue.country}</p>
                </div>
                <div className='event-card__row__section'>
                    <p className='event-card__row__section__heading'>City</p>
                    <p>{venue && venue.city}</p>
                </div>
            </div>
            <div className='event-card__row'>
                <div className='event-card__row__section'>
                    <p className='event-card__row__section__heading'>Venue</p>
                    <p>{venue.name}</p>
                </div>
                <div className='event-card__row__section'>
                    <p className='event-card__row__section__heading'>Date</p>
                    <p>{dateRender.toDateString()}</p>
                </div>
            </div>
        </div>
    );
}

export default EventCard;

