import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../data.json'

const FourOhFour = () => <h1>404</h1>

const App = () => {
    return(
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/search" component={props => <Search shows={preload.shows} />} />
                    <Route path="/details/:id" component={(props) => {
                        var selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID)
                        return(<Details show={selectedShow} {...props} />)
                    }} />
                    <Route component={FourOhFour} />
                </Switch>

            </div>
        </BrowserRouter>
    )
}

export default App;
