import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    var utilSpace;

    if(props.showSearch){
        utilSpace = (
            <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
        )
    } else {
        utilSpace = (
            <h2>
                <Link to="/search" >Back</Link>
            </h2>
        )
    }

    return(
        <header>
            <h1>
                <Link to="/" >svideo</Link>
            </h1>
            {utilSpace}
        </header>
    )
}

export default Header;
