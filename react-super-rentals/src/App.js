import Home from "./Home";
import React, { useState, useEffect } from "react";

async function serverData() {
  let data = {};
  await fetch("./api/rentals/rentals.json").then((res) => {
    Promise.resolve(res.json()).then((r) => {
      data = r.data;
    });
  });
  return data;
}

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./api/rentals/rentals.json").then((res) => {
      res.json().then((d) => {
        setData(d.data);
      });
    });
  }, []);
  return <Home data={data} />;
}

export default App;
