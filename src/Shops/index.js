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

        {this.props.shops.map((shop, i) => {

          return(
            <div className="content">
              <ol>
              <a href={shop.url}>
                <img src={shop.image_url} className="shopImg" alt={shop.name} />
                <li key={i}>
                  <h2>{shop.name}</h2>
                  <h3>{shop.location.display_address[0]} {shop.location.display_address[1]}, {shop.location.display_address[2]}</h3>
                  <h3>{shop.display_phone}</h3>
                  <div className="yelpWrapper">
                    <img id="stars" src={require(`../images/stars/${this.starRating(shop.rating)}.png`)}/>
                    <h4> based on {shop.review_count} reviews</h4>
                    <img id="yelpLogo" src={require(`../images/logo/Yelp_trademark_RGB.png`)}/>
                  </div>
              </li>
              </a>
              </ol>
            </div>
          )
        })}
      </div>
    )
  }

}


export default Shops;