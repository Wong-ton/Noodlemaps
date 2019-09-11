import React, { Component } from 'react';

class Shops extends Component {

  state = {
    
  }
  
  starRating = (rating) => {
    return rating.toString().replace('.', '')
  }

  render() {
    return(
      <div className="flexContainer">
        <div className="content">
        <ol>
        {this.props.shops.map((shop, i) => {
          console.log(shop.name)
          return(
            <div>
              <li key={i}>
              <a href={shop.url}>
                <img src={shop.image_url} className="shopImg" alt={shop.name} />
                  <h3>{shop.location.display_address[0]} {shop.location.display_address[1]}, {shop.location.display_address[2]}</h3>
                  <h2>{shop.name}</h2>
                  <h3>{shop.display_phone}</h3>
                  <div className="yelpWrapper">
                    <img id="stars" src={require(`../images/stars/${this.starRating(shop.rating)}.png`)}/>
                    <h4> based on {shop.review_count} reviews</h4>
                    <img id="yelpLogo" src={require(`../images/logo/Yelp_trademark_RGB.png`)}/>
                  </div>
              </a>
              </li>
            </div>
          )
        })}
        </ol>
        </div>
      </div>
    )
  }

}


export default Shops;