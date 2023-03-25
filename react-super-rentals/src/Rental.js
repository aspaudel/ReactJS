import React from "react";
import Image from "./Rental/Image";
import Map from "./Map";
import { Link } from "react-router-dom";

export default function Rental({ rental }) {
  const rental_id = rental.id;
  const COMMUNITY_CATEGORIES = ["Condo", "Townhouse", "Apartment"];
  rental = rental.attributes;
  let type = "";
  if (COMMUNITY_CATEGORIES.includes(rental.category)) {
    type = "Community";
  } else {
    type = "Standalone";
  }
  return (
    <div>
      <article className="rental">
        <Image src={rental.image} alt={`A picture of ${rental.title}`} />
        <div className="details">
          <h3>
            <Link to={`/rentals/${rental_id}`} state={rental}>
              {rental.title}
            </Link>
          </h3>
          <div className="detail owner">
            <span>Owner:</span>
            {rental.owner}
          </div>
          <div className="detail type">
            <span>Type:</span>
            {type}
          </div>
          <div className="detail location">
            <span>Location:</span>
            {rental.city}
          </div>
          <div className="detail bedrooms">
            <span>Number of bedrooms:</span>
            {rental.bedrooms}
          </div>
        </div>
        <Map
          lat={rental.location.lat}
          lng={rental.location.lng}
          zoom="9"
          width="150"
          height="150"
          alt={`A map of ${rental.title}`}
        ></Map>
      </article>
    </div>
  );
}
