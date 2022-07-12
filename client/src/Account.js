import React, { useState, useEffect } from "react";

function Account({ user }) {
  const [posts, setPosts] = useState([]);

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

  console.log(posts);
  //   console.log(user.id);

  function handleDelete() {
    fetch("/remove", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setPosts(posts.filter((p) => p.id !== posts.id)));
  }

  const renderPostsToAccount = posts.map((post) => {
    if (post.user.id === user.id) {
      console.log("in render posts");
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
              <button className="card-edit-btn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="account-container-padding">
      <h1 className="card-city-country">Your Posts:</h1>

      <div className="post-container">{renderPostsToAccount}</div>
    </div>
  );
}

export default Account;
