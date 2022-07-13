import React, { useState, useEffect } from "react";

function Account({ user }) {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    user_id: user.id,
    country_id: "",
    content: "",
    category: null,
    image: "",
    city: "",
  });

  const [countries, setCountries] = useState([]);

  // get all the posts
  useEffect(() => {
    fetch("/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  // get all the countries
  useEffect(() => {
    fetch("/all_countries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setCountries);
  }, []);

  //
  function handleDelete(id) {
    fetch(`/remove?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setPosts(posts.filter((p) => p.id !== id)));
  }

  function handleSubmit(e) {
    console.log("form: ", form);
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((r) => r.json())
      .then((output) => console.log(output));
    // setForm({
    //     user_id: user.id,
    //     country_id: country.id,
    //     content: content,
    //     category: category,
    //     image: image,
    //     city: city,
    // })
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const renderPostsToAccount = posts.map((post) => {
    if (post.user.id === user.id) {
      return (
        <div post={post} key={post.id}>
          <div className="post-container">
            <div className="account-post-card">
              {/* {renderPostsToAccount} */}
              <h2 className="post-user-name">{user.username}</h2>
              <img className="card-user-thumbnail" src={user.profile_image} alt="user profile photo" />
              <p>{post.content}</p>
              <img className="travel-image-thumbnail" src={post.image} alt="traveler photo" />
              <h1 className="card-city-country">
                {post.city}, {post.country.name}
              </h1>
              <button className="card-edit-btn" onClick={() => handleDelete(post.id)}>
                DELETE
              </button>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <div className="post-form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="card-city-country">Create Post</h2>
          <br></br>
          <div className="input-login">
            <label className="form-label">Country:</label>
            <br></br>
            <select onChange={handleChange} value={form.country_id} className="select-country" name="country_id">
              <option value="0">Select</option>
              {countries.map((d) => (
                <option value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
          <div className="input-login">
            <label className="form-label">Highlights from your trip:</label>
            <br></br>
            <input onChange={handleChange} value={form.content} name="content" />
          </div>
          <div className="input-login">
            <label className="form-label">Image:</label>
            <br></br>
            <input onChange={handleChange} value={form.image} name="image" />
          </div>
          <div className="input-login">
            <label className="form-label">Nearest city:</label>
            <br></br>
            <input onChange={handleChange} value={form.city} name="city" />
          </div>
          <div className="input-login">
            <label className="form-label">Category:</label>
            <br></br>
            <select onChange={handleChange} value={form.category} className="select-country" name="category">
              <option value="null">Select</option>
              <option value="lodging">Lodging</option>
              <option value="food">Food</option>
              <option value="experiences">Experiences</option>
            </select>
          </div>
          <button className="login-btn" type="submit">
            Post
          </button>
        </form>
      </div>

      <h1 className="card-city-country">Your Posts:</h1>
      <div className="post-container">{renderPostsToAccount}</div>
    </div>
  );
}

export default Account;
