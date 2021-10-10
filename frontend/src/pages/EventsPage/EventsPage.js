import React, { Component } from "react";
import './events-page.scss';
import { Link } from 'react-router-dom'
import ContentLayout from '../../layouts/ContentLayout';
import EventCard from "../../components/EventCard";
import { ROUTES } from '../../constants';
import ArtistCard from "../../components/ArtistCard";

const { SEARCH } = ROUTES

export default class EventsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const results = [
            { country: 'name1', city: 'Lahore', venue: 'Avari Hotel', date: '01/01/2022' },
            { country: 'name2', city: 'Lahore', venue: 'Avari Hotel', date: '01/01/2022' },
            { country: 'name3', city: 'Lahore', venue: 'Avari Hotel', date: '01/01/2022' },
            { country: 'name4', city: 'Lahore', venue: 'Avari Hotel', date: '01/01/2022' },
            { country: 'name5', city: 'Lahore', venue: 'Avari Hotel', date: '01/01/2022' },
            { country: 'name6', city: 'Lahore', venue: 'Avari Hotel', date: '01/01/2022' }
        ]
        return (
            <ContentLayout>
                <div className='events-page'>
                    <Link className='events-page__back-btn' to={SEARCH}>
                        <i class="events-page__back-btn__icon fa fa-chevron-left"></i>
                        {'Back to results'}
                    </Link>
                    <ArtistCard name={'name1'} facebookUrl={'facebook.com/name1'}/>
                    <h1 className='events-page__heading'>8 Upcoming Events</h1>
                    <div className='events-page__list'>
                        {results.map((event) => {
                            return (
                                <EventCard country={event.country} city={event.city} venue={event.venue} date={event.date} />
                            )
                        })}
                    </div>
                </div>
            </ContentLayout>
        );
    }
}

