import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Rental from "./Rental";

export default function Rentals({ data }) {
  let [filteredData, setFilteredData] = useState([]);
  const queryRef = useRef();

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  function handleQueryChange() {
    let query = queryRef.current.value.toLowerCase();
    if (query === "") {
      setFilteredData(data);
      return;
    }
    const fData = data.filter((d) =>
      d.attributes.title.toLowerCase().includes(query)
    );
    setFilteredData(fData);
  }

  return (
    <div className="rentals">
      <label>
        <span>Where would you like to stay?</span>
        <input
          className="lights"
          ref={queryRef}
          type="text"
          onChange={handleQueryChange}
        />
      </label>
      <ul className="results">
        {filteredData.map((d) => (
          <li key={uuidv4()}>
            <Rental rental={d}></Rental>
          </li>
        ))}
      </ul>
    </div>
  );
}
