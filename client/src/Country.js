import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Country({ country }) {
  // console.log(country);
  const location = useLocation();
  const [countryPosts, setCountryPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [countryId, setCountryId] = useState();

  // Pull country code from location.state for fetch
  const countryCode = location.state.countryCode;

  const filteredPosts = countryPosts.filter((post) => {
    switch (filter) {
      case "lodging":
        return post.category === "lodging";
      case "food":
        return post.category === "food";
      case "experiences":
        return post.category === "experiences";
      default:
        return post;
    }
  });

  // We are using this fetch to snag the country id from the db via the country code from the object passed
  // down by the click on the country.
  useEffect(() => {
    fetch(`/country_code?code=${countryCode}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((obj) => setCountryId(obj[0].id));
  }, []);

  // Watch the change on countryId and make a fetch for all the posts for that country once the id has been set.
  useEffect(() => {
    fetch(`/posts_by_country?id=${countryId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setCountryPosts);
  }, [countryId]);

  function renderImages() {
    countryPosts.map((post) => {
      return post.image.limit(5);
    });
  }

  const renderPostsToCountry = filteredPosts.map((post) => {
    return (
      <div post={post} key={post.id}>
        <div className="post-container">
          <div className="post-card">
            <h2 className="post-user-name">{post.user.username}</h2>
            <img className="card-user-thumbnail" src={post.user.profile_image} alt="user_profile_photo" />
            <p>{post.content}</p>
            {/* <p>{post.category}</p> */}
            <img className="travel-image-thumbnail" src={post.image} alt="traveler_photo" />
            <h1 className="card-city-country">
              {post.city}, {post.country.name}
            </h1>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="country-header" onClick={() => setFilter("")}>
        {location.state.country.toUpperCase()}
      </div>
      {/* <h2>{location.state.countryCode}</h2> */}
      <div>{renderImages}</div>
      {/* <img src={"https://media-cdn.tripadvisor.com/media/photo-s/1c/62/f2/22/sirimahannop.jpg"} /> */}
      <div className="filter-posts-buttons-container">
        <button className="filter-btn" onClick={() => setFilter("lodging")} name="lodging">
          LODGING
        </button>
        <button className="filter-btn" onClick={() => setFilter("food")} name="food">
          FOOD
        </button>
        <button className="filter-btn" onClick={() => setFilter("experiences")} name="experiences">
          EXPERIENCES
        </button>
      </div>
      <br></br>
      <div className="post-container">{renderPostsToCountry}</div>
    </div>
  );
}

export default Country;
