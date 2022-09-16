import React from "react";
import "./TouristInfoCards.css";

const TouristInfoCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="box">
          <img
            className="cityPicture"
            alt="Glasgow-picture"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/1c/9d/university-of-glasgow.jpg?w=1200&h=-1&s=1"
          />
          <h3 className="cityName">Glasgow</h3>
          <p className="info">
            Glasgow is the most populous city in Scotland and the fourth-most
            populous city in the United Kingdom, as well as being the 27th
            largest city by population in Europe. The city now forms the Glasgow
            City Council area, and is governed by Glasgow City Council.
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
            alt="Manchester-picture"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=1200&h=-1&s=1"
          />
          <h3 className="cityName">Manchester</h3>
          <p className="info">
            Manchester the main city of Northern England, as well as the
            so-called North-West region of England. Manchester is the central
            city of the urban area known as Greater Manchester. The population
            of Manchester is 545,500. Greater Manchester has a population of
            2,702,209.
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
            alt="London-picture"
            src="https://tripmydream.cc/travelhub/travel/region/8/8.jpg"
          />
          <h3 className="cityName">London</h3>
          <p className="info">
            London the capital of England and Great Britain, located on the
            Thames River. One of the largest cities in Europe. The area is 1572
            km²; in 2017, the population was 8.8 million people, and with
            suburbs about 10 million. Central London is the financial and
            commercial center of the United Kingdom of Great Britain and
            Northern Ireland.
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
