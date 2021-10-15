import React, { Component } from "react";
import './events-page.scss';
import { Link } from 'react-router-dom';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import ContentLayout from '../../layouts/ContentLayout';
import EventCard from "../../components/EventCard";
import { ROUTES } from '../../constants';
import ArtistCard from "../../components/ArtistCard";
import { getArtistByName, getArtistsEvents } from '../../server.js/artists';
import { formatDateRange } from '../../helpers';

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
            loading: true,
            dateRange: '',
            errMsg: ''
        };
    }

    componentDidMount() {
        const startRange = Date.now()
        const date = new Date()
        const endRange = date.setDate(date.getDate() + 30)
        this.setState({ dateRange: [startRange, endRange] })
        this.getArtist()
        this.getEvents([startRange, endRange])
    }

    // getting clicked artist data on same page (handling page refresh)
    getArtist = async () => {
        const name = this.props.match.params.artist_name
        const response = await getArtistByName(name)
        this.setState({
            name: response.data.name,
            facebookUrl: response.data.facebook_page_url,
            imageUrl: response.data.image_url,
            totalUpcomingEvents: response.data.upcoming_event_count
        })
    }

    getEvents = async (dateRange) => {
        const name = this.props.match.params.artist_name
        // for start keep the Date Range default to send in API call
        let dateRangeString = 'upcoming'
        if (this.state.dateRange){
            const startDate = new Date(dateRange[0])
            const endDate = new Date(dateRange[1])
            dateRangeString = formatDateRange(startDate, endDate)
        }
        const response = await getArtistsEvents(name, dateRangeString)
        // handling error sent in string format in response data
        if(typeof(response.data) !== 'string'){
            if (response.data.length){
                this.setState({ events: response.data, loading: false })
            }
            else{
                this.setState({ events: response.data, loading: false, errMsg: 'No Events Found in Selected Date Range' })
            }
        }
        else{
            this.setState({errMsg: response.data, events: []})
        }
    }

    onDateRangeChange = (dateRange) => {
        const startDate = dateRange[0]
        const endDate = dateRange[1]
        this.setState({dateRange: [startDate, endDate]})
        this.getEvents([startDate, endDate])
    }

    render() {
        return (
            <ContentLayout>
                <div className='events-page'>
                    <Link className='events-page__back-btn' to={SEARCH}>
                        <i class="events-page__back-btn__icon fa fa-chevron-left"></i>
                        {'Back to results'}
                    </Link>
                    <ArtistCard name={this.state.name} facebookUrl={this.state.facebookUrl} imageUrl={this.state.imageUrl} />
                    <div className='events-page__header'>
                        <h1 className='events-page__heading'>{`${this.state.totalUpcomingEvents} Upcoming Events`}</h1>
                        <div className='events-page__daterange-container'>
                            <label>
                                Date Range
                        </label>
                            <DateRangePicker
                                value={this.state.dateRange}
                                onChange={(range) => this.onDateRangeChange(range)}
                            />
                        </div>
                    </div>
                    <div className='events-page__list'>
                        {!!this.state.events.length && this.state.events.map((event) => {
                            return (
                                <EventCard title={event.title} venue={event.venue} date={event.datetime} />
                            )
                        })}
                        {this.state.loading && <p>Loading...</p>}
                    </div>
                    {this.state.errMsg !== '' && <p>{this.state.errMsg}</p>}
                </div>
            </ContentLayout>
        );
    }
}

