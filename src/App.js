import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Old';
import axios from 'axios';
import Results from './Results';

const mapApiKey = process.env.REACT_APP_MAP_API_KEY;

class App extends Component {

  state = {
    loading: null,
    message: null,
    shops: [],
    centerCoords: {},
    hidden: true,
    hideCover: false,
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.getYelp();

  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  getYelp = () => {
    this.setState({
      loading: true
    })
    axios.get(`${`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=${mapApiKey}`}`)
      .then((res) => {
        this.setState({
          centerCoords: res.data.results[0].geometry.location
        })
      })
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.state.location}&term=noodles`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        }
    })
    .then((res) => {
        console.log(res.data.businesses)
        this.setState({ shops: res.data.businesses, loading: false, hidden: false, hideCover: true })
    })
    .catch((err) => {
        this.setState({ error: "Sorry, we couldn't find any shops around this area. Please enter another location and try again", loading: false})
    })
  }

  render(){
    return (
      <div>
        <div id="cover">
          <span id="cover-container">
            <span className="logo">NoodleMaps</span>

            <div id="search">
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Address, City, or General Location"
                  onChange={this.onChange}
                />
                <button type="submit" disabled={!this.state.location}>Send Noods</button>
              </form>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              {
                this.state.hideCover ?
                <Results shops={this.state.shops} coordinates={this.state.centerCoords} hidden={this.state.hidden}/>
                : ''
              }
          </span>
        </div>
        {/* {
          !this.state.hidden ?
          <Results shops={this.state.shops} coordinates={this.state.centerCoords} hidden={this.state.hidden}/>
          : ''
        } */}
        {/* <Switch>
          <Route exact path="/home" render={(props) => <Home {...props} />} />
          <Results shops={this.state.shops} coordinates={this.state.centerCoords} hidden={this.state.hidden}/>
        </Switch> */}
      </div>
    );
  }
}

export default App;
