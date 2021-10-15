import React, { Component } from "react";
import './search-page.scss';
import ContentLayout from '../../layouts/ContentLayout';
import ArtistCard from "../../components/ArtistCard";
import { getArtists } from '../../server.js/artists';

export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            artists: [],
            loading: false,
            errMsg: '',
            statusMsg: '',
        };
    }

    // api call for ssearching artists
    handleSearch = async (text) => {
        this.setState({ artists: [], loading: true })
        const response = await getArtists(text)
        this.setState({ artists: response.data, statusMsg: response.statusMsg, errMsg: response.errMsg, loading: false })
    }

    render() {
        return (
            <ContentLayout>
                <div className='search-page'>
                    <label>Search For your favourite artist</label>
                    <form className='search-page__input-container'>
                        <input className='search-page__input'
                            onChange={(e) => {
                                e.preventDefault()
                                this.setState({ searchText: e.target.value, errMsg: '', statusMsg: '' })
                                this.handleSearch(e.target.value)
                            }}
                            value={this.state.searchText}
                        />

                        <i className="fa fa-search search-page__icon"></i>
                    </form>
                    <div className='search-page__results'>
                        {this.state.artists.map((artist) => {
                            return (
                                <ArtistCard key={artist.id} clickable id={artist.id} name={artist.name} facebookUrl={artist.facebook_page_url} imageUrl={artist.image_url} />
                            )
                        })}
                        {this.state.loading && <p>Loading...</p>}
                        {this.state.statusMsg && <p>{this.state.statusMsg}</p>}
                    </div>
                </div>
            </ContentLayout>
        );
    }
}

