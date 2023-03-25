import React from "react";

const mapBoxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const MAPBOX_API = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static";

export default function Map(props) {
  function getSrc() {
    let { lng, lat, width, height, zoom } = props;
    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${mapBoxToken}`;
    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  let token = encodeURIComponent(mapBoxToken);
  const src = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${props.lng},${props.lat},${props.zoom}/${props.width}x${props.height}@2x?access_token=${token}`;

  return (
    <div className="map">
      <img
        alt="Map image at coordinate ${props.lat}, ${props.lng}"
        {...props}
        src={src}
        width={props.width}
        height={props.height}
      ></img>
    </div>
  );
}
