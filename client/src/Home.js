import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";

function Home() {
  const [countries, setCountries] = useState({ features: [] });
  const [hover, setHover] = useState();
  //   const myGlobe = useRef();
  const geoJson = "http://127.0.0.1:3000/countries";
  useEffect(() => {
    fetch(geoJson)
      .then((r) => r.json())
      .then(setCountries);
    // const globe = myGlobe.current;
    // globe.controls().autoRotate = true;
    // globe.controls().autoRotateSpeed = 0.4;
  }, []);

  const countryNames = countries.features.map((d) => d.properties.ADMIN);

  function handleClick(e) {
    console.log(e.properties.ADMIN);
  }

  return (
    <div className="Home">
      <Globe
        polygonsData={countries.features.filter((d) => d.properties)}
        backgroundColor={"#FFFFFF"}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        atmosphereColor={"#FFFFFF"}
        // lineHoverPrecision={0}
        polygonAltitude={(d) => (d === hover ? 0.06 : 0.02)}
        polygonCapColor={(d) => (d === hover ? "steelblue" : "pink")}
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
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
