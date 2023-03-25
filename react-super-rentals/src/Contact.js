import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function contact() {
  return (
    <div>
      <NavBar />
      <div className="jumbo">
        <div className="right tomster"></div>
        <h2>Contact Us</h2>
        <p>
          Super Rentals Representatives would love to help you
          <br />
          choose a destination or answer any questions you may have.
        </p>
        <address>
          Super Rentals HQ
          <p>
            1212 Test Address Avenue
            <br />
            Testington, OR 97233
          </p>
          <a href="tel:503.555.1212">+1 (503) 555-1212</a>
          <br />
          <a href="mailto:superrentalsrep@emberjs.com">
            superrentalsrep@emberjs.com
          </a>
        </address>
        <Link to="/about" className="button">
          About
        </Link>
      </div>
    </div>
  );
}