import React, { Component } from 'react'
import ShowCard from './ShowCard'
import Header from './Header'

class Search extends Component {
    state = {
        searchTerm: ""
    }
    handleSearchTermChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }
    render(){
        return(
            <div className="search">
                <Header searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} showSearch />
                <div>
                    {this.props.shows
                        .filter(
                            show => `${show.title} ${show.description}`.toUpperCase()
                            .indexOf(this.state.searchTerm.toUpperCase()) >= 0
                        )
                        .map((show) => <ShowCard key={show.imdbID} {...show} />)}
                </div>
            </div>
        )
    }
}

export default Search;
