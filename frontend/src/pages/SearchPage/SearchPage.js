import React, { Component } from "react";
import './search-page.scss';
import ContentLayout from '../../layouts/ContentLayout';
import ArtistCard from "../../components/ArtistCard";

export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const results = [
            { name: 'name1', facebookUrl: 'facebook.com/name1' },
            { name: 'name2', facebookUrl: 'facebook.com/name2' },
            { name: 'name3', facebookUrl: 'facebook.com/name3' },
            { name: 'name4', facebookUrl: 'facebook.com/name4' },
            { name: 'name5', facebookUrl: 'facebook.com/name5' },
        ]
        return (
            <ContentLayout>
                <div className='search-page'>
                    <div className='search-page__input-container'>
                        <input className='search-page__input' />
                        <i className="fa fa-search search-page__icon"></i>
                    </div>
                    <div className='search-page__results'>
                        {results.map((artist) => {
                            return (
                                <ArtistCard clickable name={artist.name} facebookUrl={artist.facebookUrl} />
                            )
                        })}
                    </div>
                </div>
            </ContentLayout>
        );
    }
}

