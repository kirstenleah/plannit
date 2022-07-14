# 🌎 Capstone Project 🏝🗺

Plannit: 
*A social media app for travelers to share the best of the best from their adventures around the world, and get inspiration for their next vacation*

Getting started: 

1. Globe will not render with any React version after v.17
2. Install nvm
3. nvm install node v.16.15.1
4. Ruby environment setup
5. Install Postgres

**Home: A draggable globe with geo-location enabled to spin/land on a random country, + a search option**
<img width="1128" alt="image" src="https://user-images.githubusercontent.com/99378787/176017557-7619ab4b-2ed8-4cc0-9656-be642c0583b3.png">

**Sample results**
<img width="1130" alt="image" src="https://user-images.githubusercontent.com/99378787/176017672-79bf409a-2163-4795-9bc5-ed749b5c7070.png">

**Filter by Lodging, Food, or Experiences**
<img width="1130" alt="image" src="https://user-images.githubusercontent.com/99378787/176017786-d3d80d28-1283-4e81-98e0-15b76630a0d8.png">

**As a user, I can:**
- Spin the globe to choose a potential travel destination
- See travelers' posts associated with the country I click
- Create a new account
- Post my own stories and edit my profile if I am logged in

API:
- Utilized geojson dataset for which I built a custom API endpoint

Main goals:
- Spin the globe on homepage :heavy_check_mark:
- Interact with globe (geo-location enabled) :heavy_check_mark:
- GET posts by country :heavy_check_mark:
- Log in w/ authentication :heavy_check_mark:
- Create a new account :heavy_check_mark:
- Edit account details/see posts I've made :heavy_check_mark:
- Create a new post :heavy_check_mark:
- Categorize posts by lodging, food, experiences associated with each country :heavy_check_mark:
- See posts including text and images :heavy_check_mark:

Stretch goals:
- Hyperlink to businesses from posts
- Comment/like option with posts
- Filter by most popular posts
- Map with pins for popular tourist destinations in the area
- Thumbnail pop-ups on globe showing the traveler's profile photo and post snippet
- See only photos for selected location
- Search reviews for keywords
- User account page when logged in to show activity (my posts + liked/commented-on posts)
- Build install script for anyone who wants to clone/use this repo
- Save favorited posts to personal account history when logged in
- Extensive library of user posts for most countries, so that when a user spins the globe and lands on any country, they can see at least some content

