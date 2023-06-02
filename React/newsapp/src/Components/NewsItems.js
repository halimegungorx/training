import React, { Component } from "react";

const NewsItems = (props) => {
  
    let { title, description, imgUrl, newsUrl } = props;
    return (
      <div>
        <div className="card" >
          {/* if img is null put the photo in the link  */}
          <img src={!imgUrl?"https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0503%2Fr1167862_1296x729_16%2D9.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
