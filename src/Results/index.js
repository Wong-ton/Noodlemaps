import React, { Component } from 'react';


class Results extends Component {
  
  starRating = (rating) => {
    return rating.toString().replace('.', '')
  }

  render() {
    return(
      <div className="flexContainer">

        {this.props.shops.map((shop, i) => {

          return(
            <div key={i} className="shopContainer">
              
                <img src={shop.image_url} className="shopImg" alt={shop.name} />
                <h2>{shop.name}</h2>
                <h3>{shop.display_address}</h3>
                <h3>{shop.display_phone}</h3>
                <div className="yelpWrapper">
                  <img id="stars" src={require(`../images/stars/${this.starRating(shop.rating)}.png`)}/>
                  <h4> based on {shop.review_count} reviews</h4>
                  <img id="logo" src={require(`../images/logo/Yelp_trademark_RGB.png`)}/>
                </div>
            </div>
          )
        })}
      </div>
    )
  }

}


export default Results;