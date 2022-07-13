import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Country({ country }) {
  // console.log(country);
  const location = useLocation();
  const [filteredByCategory, setFilteredByCategory] = useState([]);
  const [countryPosts, setCountryPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [countryId, setCountryId] = useState();

  const countryCode = location.state.countryCode;

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

  console.log("Country posts: ", countryPosts);

  const renderPostsToCountry = countryPosts.map((post) => {
    return (
      <div post={post} key={post.id}>
        <div className="post-container">
          <div className="post-card">
            <h2 className="post-user-name">{post.user.username}</h2>
            <img className="card-user-thumbnail" src={post.user.profile_image} alt="user profile photo" />
            <p>{post.content}</p>
            <img className="travel-image-thumbnail" src={post.image} alt="traveler photo" />
            <h1 className="card-city-country">
              {post.city}, {post.country.name}
            </h1>
          </div>
        </div>
      </div>
    );
  });

  function renderLodgingPosts() {
    const lodgingArr = [];
    countryPosts.map((post) => {
      if (post.country.name === location.state.country) {
        if (post.category === "lodging") {
          lodgingArr.push(post);
          console.log(post);
        }
      }
      setFilteredByCategory(lodgingArr);
      setFiltered(true);
    });
  }

  function renderFoodPosts() {
    countryPosts.map((post) => {
      if (post.category === "food") {
        return (
          <div className="post-container">
            <div className="post-card">{post}</div>
          </div>
        );
      }
    });
  }

  function renderExperiencesPosts() {
    countryPosts.map((post) => {
      if (post.category === "experiences") {
        return (
          <div className="post-container">
            <div className="post-card">{post}</div>
          </div>
        );
      }
    });
  }

  function renderImages() {
    countryPosts.map((post) => {
      return post.image.limit(5);
    });
  }

  return (
    <div>
      <div className="country-header">{location.state.country.toUpperCase()}</div>
      {/* <h2>{location.state.countryCode}</h2> */}
      <div>{renderImages}</div>
      {/* <img src={"https://media-cdn.tripadvisor.com/media/photo-s/1c/62/f2/22/sirimahannop.jpg"} /> */}
      <div className="filter-posts-buttons-container">
        <button className="filter-btn" onClick={renderLodgingPosts} name="lodging">
          LODGING
        </button>
        <button className="filter-btn" onClick={renderFoodPosts} name="food">
          FOOD
        </button>
        <button className="filter-btn" onClick={renderExperiencesPosts} name="experiences">
          EXPERIENCES
        </button>
      </div>
      <br></br>
      <div className="post-container">{renderPostsToCountry}</div>
    </div>
  );
}

export default Country;
