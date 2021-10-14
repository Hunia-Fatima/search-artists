import React, { Component } from "react";
import './events-page.scss';
import { Link } from 'react-router-dom';
import ContentLayout from '../../layouts/ContentLayout';
import EventCard from "../../components/EventCard";
import { ROUTES } from '../../constants';
import ArtistCard from "../../components/ArtistCard";
import { getArtistByName, getArtistsEvents } from '../../server.js/artists';

const { SEARCH } = ROUTES

export default class EventsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            facebookUrl: '',
            imageUrl: '',
            totalUpcomingEvents: 0,
            events: [],
            loading: true
        };
    }

    componentDidMount() {
        this.getArtist()
        this.getEvents()
      }

    getArtist = async() => {
        const name = this.props.match.params.artist_name
        const response = await getArtistByName(name)
        this.setState({name: response.data.name, 
            facebookUrl: response.data.facebook_page_url, 
            imageUrl: response.data.image_url, 
            totalUpcomingEvents: response.data.upcoming_event_count})
    }

    getEvents = async() => {
        const name = this.props.match.params.artist_name
        const response = await getArtistsEvents(name)
        this.setState({events: response.data, loading: false})
    }

    render() {
        return (
            <ContentLayout>
                <div className='events-page'>
                    <Link className='events-page__back-btn' to={SEARCH}>
                        <i class="events-page__back-btn__icon fa fa-chevron-left"></i>
                        {'Back to results'}
                    </Link>
                    <ArtistCard name={this.state.name} facebookUrl={this.state.facebookUrl} imageUrl={this.state.imageUrl}/>
                    <h1 className='events-page__heading'>{`${this.state.totalUpcomingEvents} Upcoming Events`}</h1>
                    <div className='events-page__list'>
                        {this.state.events.map((event) => {
                            return (
                                <EventCard title={event.title} venue={event.venue} date={event.datetime} />
                            )
                        })}
                        {this.state.loading && <p>Loading...</p>}
                    </div>
                </div>
            </ContentLayout>
        );
    }
}

