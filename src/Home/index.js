import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Home extends Component {

    state = {
      loading: null,
      message: null,
    }

    onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    
    // grab search location and insert to yelp api
    onSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.search)

      this.getYelp();
    }

    getYelp = () => {

        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.state.search}&term=noodles`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
            }
        })
        .then((res) => {
            console.log(res.data.businesses)
            this.setState({ business: res.data.businesses, loading: false })
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
                name="search"
                placeholder="Enter Location"
                onChange={this.onChange}
              />
              <button type="submit">Go</button>
            </form>
        </div>
      )
    }
}

export default Home;