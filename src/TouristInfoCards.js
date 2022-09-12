import React from "react";
import "./TouristInfoCards.css";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="box">
          <img
            className="cityPicture"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/1c/9d/university-of-glasgow.jpg?w=1200&h=-1&s=1"
          />
          <h3 className="cityName">Glasgow</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nostrum
            iste sed asperiores in cumque iusto! Sunt ipsam aspernatur dolore
            explicabo, unde quam magni cum? Lorem ipsum dolor sit amet. Lorem
            ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            target="blank"
            className="card-1"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <img
            className="cityPicture"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=1200&h=-1&s=1"
          />
          <h3 className="cityName">Manchester</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nostrum
            iste sed asperiores in cumque iusto! Sunt ipsam aspernatur dolore
            explicabo, unde quam magni cum? Lorem ipsum dolor sit amet. Lorem
            ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            target="blank"
            className="card-2"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <img
            className="cityPicture"
            src="https://tripmydream.cc/travelhub/travel/region/8/8.jpg"
          />
          <h3 className="cityName">London</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nostrum
            iste sed asperiores in cumque iusto! Sunt ipsam aspernatur dolore
            explicabo, unde quam magni cum? Lorem ipsum dolor sit amet. Lorem
            ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <a href="https://visitlondon.com/" target="blank" className="card-3">
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
