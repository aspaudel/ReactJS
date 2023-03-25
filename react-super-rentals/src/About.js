import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function about() {
  return (
    <div>
      <NavBar />
      <div className="jumbo">
        <div className="right tomster"></div>
        <h2>About Super Rentals</h2>
        <p>
          The Super Rentals website is a delightful project created to explore
          Ember. By building a property rental site, we can simultaneously
          imagine traveling AND building Ember applications.
        </p>
        <Link to="/contact" className="button">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
