import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Country({ country }) {
  // console.log(country);
  const location = useLocation();
  const [filteredByCategory, setFilteredByCategory] = useState([]);
  const [countryPosts, setCountryPosts] = useState([]);

  // console.log(location.state.country);

  useEffect(() => {
    fetch("/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setCountryPosts);
  }, []);

  console.log("Country posts: ", countryPosts);

  const renderPostsToCountry = countryPosts.map((post) => {
    if (post.country.name === location.state.country) {
      return (
        <div post={post} key={post.id}>
          <div className="post-container">
            <div className="post-card">
              {/* {renderPostsToAccount} */}
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
    }
  });

  // console.log("country posts: ", countryPosts);

  function renderLodgingPosts() {
    countryPosts.map((post) => {
      if (post.country.name === location.state.country) {
        if (post.category === "lodging") {
          // return (
          //   <div className="post-container">
          //     <div className="post-card">{post}</div>
          //   </div>
          // );
        }
      }
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
    console.log("clicked");
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
        <button className="filter-btn" onClick={renderLodgingPosts}>
          LODGING
        </button>
        <button className="filter-btn" onClick={renderFoodPosts}>
          FOOD
        </button>
        <button className="filter-btn" onClick={renderExperiencesPosts}>
          EXPERIENCES
        </button>
      </div>
      <br></br>
      <div className="post-container">{renderPostsToCountry}</div>
    </div>
  );
}

export default Country;
