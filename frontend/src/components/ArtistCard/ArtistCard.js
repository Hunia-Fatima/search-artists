import React, { Component } from "react";
import './artist-card.scss';
import { Link } from 'react-router-dom';
import WhiteImage from '../../assets/white.png';
import { ROUTES } from '../../constants';
const { ARTIST_DETAIL } = ROUTES


// representation component for artist data
const ArtistCard = (name, clickable, imageUrl, facebookUrl) => {
    if (name) {
        return (
            <Link className={'artist-card__link'} to={clickable ? `${ARTIST_DETAIL}/${this.props.name}` : '#'}>
                <div className='artist-card'>
                    <img className='artist-card__image' src={imageUrl ? this.props.imageUrl : WhiteImage} />
                    <div className='artist-card__info'>
                        <p className='artist-card__info__name'>{name}</p>
                        <p className='artist-card__info__fb-url'>{facebookUrl}</p>
                    </div>
                </div>
            </Link>
        )
    }
    else {
        return (
            !this.props.clickable && !this.props.name ? <p>Loading...</p> :
                <p>No Artist Found Against your Search</p>
        )
    }
}

export default ArtistCard;

