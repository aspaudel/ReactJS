import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Detailed from "./Detailed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/rentals/:rental_id" element={<Detailed />} />
    </Routes>
  </BrowserRouter>
);
