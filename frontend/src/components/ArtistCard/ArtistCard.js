import React, { Component } from "react";
import './artist-card.scss';
import { Link } from 'react-router-dom';
import WhiteImage from '../../assets/white.png';
import { ROUTES } from '../../constants';
const { ARTIST_DETAIL } = ROUTES

export default class ArtistCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            this.props.name?
            <Link className={'artist-card__link'} to={this.props.clickable ? `${ARTIST_DETAIL}/${this.props.name}`: '#'}>
                <div className='artist-card'>
                    <img className='artist-card__image' src={this.props.imageUrl} />
                    <div className='artist-card__info'>
                        <p className='artist-card__info__name'>{this.props.name}</p>
                        <p className='artist-card__info__fb-url'>{this.props.facebookUrl}</p>
                    </div>
                </div>
            </Link>:
            !this.props.clickable && !this.props.name ? <p>Loading...</p>:
            <p>No Artist Found Against your Search</p>
        );
    }
}

