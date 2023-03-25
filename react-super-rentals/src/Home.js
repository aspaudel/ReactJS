import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Rentals from "./Rentals";

export default function home({ data }) {
  return (
    <div>
      <NavBar />
      <div className="jumbo">
        <div className="right tomster"></div>
        <h2>Welcome to Super Rentals!</h2>
        <p>
          We hope you find exactly what you're looking for in a place to stay.
        </p>
        <Link to="/about" className="button">
          About Us
        </Link>
      </div>
      <Rentals data={data}></Rentals>
    </div>
  );
}
