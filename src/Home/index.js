import React from 'react';
import './App.css';

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
    
    // grab value and append it to the yelp search
    onSubmit = () => {
    
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
            </form>
        </div>
      )
    }
}

export default Home;