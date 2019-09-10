import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Map from '../Map';
import Results from '../Results';

class Home extends Component {

    state = {
      loading: null,
      message: null,
      shops: [],
      location: null
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
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.state.location}&term=noodles`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
            }
        })
        .then((res) => {
            console.log(res.data.businesses)
            this.setState({ shops: res.data.businesses, loading: false })
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
            <button type="submit">Go</button>
          </form>

          {/* { this.state.shops = [] ? null : <Map shops={this.state.shops}/> } */}

          <div className="content">
            <Map shops={this.state.shops} location={this.state.location}/>  
            <Results shops={this.state.shops} location={this.state.location}/>
          </div>
        </div>
      )
    }
}

export default Home;