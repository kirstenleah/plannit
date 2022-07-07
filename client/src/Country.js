import React from "react";
import { useLocation } from "react-router-dom";

function Country({ country }) {
  const location = useLocation();

  console.log(location.state.country);

  return (
    <div>
      <div className="country-header">{location.state.country.toUpperCase()}</div>
      <h2>{location.state.countryCode}</h2>
      <div className="filter-posts-buttons-container">
        <button className="filter-btn">LODGING</button>
        <button className="filter-btn">FOOD</button>
        <button className="filter-btn">EXPERIENCES</button>
      </div>
      <div className="post-container">
        <div className="post-card">
          <h2 className="post-user-name">Lucy</h2>
          <img
            className="card-user-thumbnail"
            /*src={user.image_url}*/ src={
              "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            alt="user profile photo"
          />
          <p>
            This will interpolate post.text and will say something like We started with a tour and tasting around a couple of local markets
            (I didn't see a single other tourist), and then took a relaxing little riverboat ride to her restaurant right on the water. A
            quick welcome snack and drink later and it was time to get to cooking...I'm sure there's a set plan for the day if you don't
            have any special requests but once I mentioned my favorite Thai dish it was added to my curriculum. What followed was a
            gym-session's worth of slicing, frying, laughing, singing, and dishing before I ate what I had made (with a lot of help from the
            two of them as well as Mod's sister May -- I apologize if I've misspelled anyone's name), in addition to a delicious
            house-prepared special dessert I had no idea was coming. So very tasty.
          </p>
        </div>
        <div className="post-card">
          <h2 className="post-user-name">Dr. Nantucket</h2>
          <img
            className="card-user-thumbnail"
            /*src={user.image_url}*/ src={
              "https://media.istockphoto.com/photos/cool-cat-with-shades-picture-id1249884596?k=20&m=1249884596&s=612x612&w=0&h=16nnd8JAJW2MdEghUJnaAiZfPezWoVUTAW9bwOE3Z7E="
            }
            alt="user profile photo"
          />
          <p>
            This will interpolate post.text and will say something like We started with a tour and tasting around a couple of local markets
            (I didn't see a single other tourist), and then took a relaxing little riverboat ride to her restaurant right on the water. A
            quick welcome snack and drink later and it was time to get to cooking...I'm sure there's a set plan for the day if you don't
            have any special requests but once I mentioned my favorite Thai dish it was added to my curriculum. What followed was a
            gym-session's worth of slicing, frying, laughing, singing, and dishing before I ate what I had made (with a lot of help from the
            two of them as well as Mod's sister May -- I apologize if I've misspelled anyone's name), in addition to a delicious
            house-prepared special dessert I had no idea was coming. So very tasty.
          </p>
        </div>
        <div className="post-card">
          <h2 className="post-user-name">Calisse</h2>
          <img
            className="card-user-thumbnail"
            /*src={user.image_url}*/ src={"https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg"}
            alt="user profile photo"
          />
          <p>
            This will interpolate post.text and will say something like We started with a tour and tasting around a couple of local markets
            (I didn't see a single other tourist), and then took a relaxing little riverboat ride to her restaurant right on the water. A
            quick welcome snack and drink later and it was time to get to cooking...I'm sure there's a set plan for the day if you don't
            have any special requests but once I mentioned my favorite Thai dish it was added to my curriculum. What followed was a
            gym-session's worth of slicing, frying, laughing, singing, and dishing before I ate what I had made (with a lot of help from the
            two of them as well as Mod's sister May -- I apologize if I've misspelled anyone's name), in addition to a delicious
            house-prepared special dessert I had no idea was coming. So very tasty.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Country;
