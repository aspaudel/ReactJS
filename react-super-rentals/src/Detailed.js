import React from "react";
import { useLocation } from "react-router-dom";
import Image from "./Rental/Image";
import Map from "./Map";
import NavBar from "./NavBar";
import ShareButton from "./ShareButton";

export default function Detailed() {
  const rental = useLocation().state;
  return (
    <div>
      <NavBar />
      <div className="jumbo">
        <div className="right tomster"></div>
        <h2>{rental.title}</h2>
        <p>
          Nice find! This looks like a nice place to stay near {rental.city}
        </p>
        <ShareButton
          text={`Check out ${rental.title} on Super Rentals!`}
          hashtags="vacation, travel, authentic, blessed, superrentals"
          via="emberjs"
        ></ShareButton>
      </div>
      <article className="rental detailed">
        <Image src={rental.image} alt={`A picture of ${rental.title}`}></Image>
        <div className="details">
          <h3>About {rental.title}</h3>
          <div className="detail owner">
            <span>Owner:</span> {rental.owner}
          </div>
          <div className="detail type">
            <span>Type:</span> {rental.type} - {rental.category}
          </div>
          <div className="detail location">
            <span>Location:</span> {rental.city}
          </div>
          <div className="detail bedrooms">
            <span>Number of bedrooms:</span> {rental.bedrooms}
          </div>
          <div className="detail description">
            <p>{rental.description}</p>
          </div>
        </div>
        <Map
          lat={rental.location.lat}
          lng={rental.location.lng}
          zoom="12"
          width="894"
          height="600"
          alt={`A map of ${rental.title}`}
          className="large"
        ></Map>
      </article>
    </div>
  );
}
