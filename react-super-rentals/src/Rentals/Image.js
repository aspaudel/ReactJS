import React, { useState } from "react";

function Image(props) {
  let [isLarge, setSize] = useState(false);

  const toggleSize = () => setSize((value) => !value);

  if (isLarge) {
    return (
      <button type="button" className="image large" onClick={toggleSize}>
        <img {...props} />
        <small>View Smaller</small>
      </button>
    );
  } else {
    return (
      <button type="button" className="image" onClick={toggleSize}>
        <img {...props} />
        <small>View Larger</small>
      </button>
    );
  }
}
export default Image;
