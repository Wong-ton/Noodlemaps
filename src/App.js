import React, { Component } from 'react';
import './App.css';
import Map from './Map';


class App extends Component {

  state = {
    loading: null,
    error: null,
  }

  getYelp = () => {

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=los%20angeles&term=noodles`, {
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
    return (
      <div id="cover">
        <h1>NoodleMAPS</h1>
        <hr/>
        <Map/>
        <div className="content">
          Something here
        </div>
      </div>
    );
  }
}

export default App;
