/*
Globe object created by Vasco Asturiano (github username: vasturiano)
react-globe.gl repo: https://github.com/vasturiano/react-globe.gl
License: https://github.com/vasturiano/react-globe.gl/blob/master/LICENSE
*/

import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Globe from "react-globe.gl";
import Country from "./Country";

function Home() {
  const [countries, setCountries] = useState({ features: [] });
  const [hover, setHover] = useState();

  const globeEl = useRef();

  const geoJson = "/countries";
  useEffect(() => {
    fetch(geoJson)
      .then((r) => r.json())
      .then(setCountries);

    // const globe = globeEl.current;
    // console.log(globe);
    // globe.controls().rotateSpeed = 3;
  }, []);

  const countryNames = countries.features.map((d) => d.properties.ADMIN);
  const history = useHistory();

  function handleClick(e) {
    let countryName = e.properties.ADMIN;
    let countryCode = e.properties.ADM0_A3;

    history.push({
      pathname: "/country",
      state: { country: countryName, countryCode: countryCode },
    });
  }

  return (
    <div className="Home">
      <Globe
        polygonsData={countries.features.filter((d) => d.properties)}
        backgroundColor={"#FFFFFF"}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        atmosphereColor={"#FFFFFF"}
        // lineHoverPrecision={0}
        polygonAltitude={(d) => (d === hover ? 0.04 : 0.01)}
        polygonCapColor={(d) => (d === hover ? "#ee81b0d1" : "#fefefe00")}
        polygonSideColor={() => "rgba(0, 30, 0, 0.15)"}
        polygonStrokeColor={() => "#6f6f6f"}
        polygonsTransitionDuration={300}
        onPolygonHover={setHover}
        onPolygonClick={handleClick}
        polygonLabel={({ properties: d }) => `
        <b>${d.ADMIN}</b>`}
      />
    </div>
  );
}

export default Home;
