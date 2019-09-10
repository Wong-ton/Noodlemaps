import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Map from '../Map';
import Results from '../Results';

const mapApiKey = process.env.REACT_APP_MAP_API_KEY;

class Home extends Component {

    state = {
      loading: null,
      message: null,
      shops: [],
      centerCoords: {},
      mapHidden: true
    }

    onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    
    onSubmit = (event) => {
      event.preventDefault();
      this.getYelp();
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
            this.setState({ shops: res.data.businesses, loading: false, mapHidden: false })
        })
        .catch((err) => {
            this.setState({ error: "Sorry, we couldn't find any shops around this area. Please enter another location and try again", loading: false})
        })
    }

    render(){
      return(
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              onChange={this.onChange}
            />
            <button type="submit" disabled={!this.state.location}>Send Noods</button>
          </form>
          <div className="map">
            <Map shops={this.state.shops} coordinates={this.state.centerCoords} hidden={this.state.mapHidden}/>  
          </div>
          <div className="content">
            <Results shops={this.state.shops}/>
          </div>
        </div>
      )
    }
}

export default Home;