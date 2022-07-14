# 🌎 Capstone Project 🏝🗺

Plannit: 
*A social media app for travelers to share the best of the best from their adventures around the world, and get inspiration for their next vacation*

Getting started: 

1. Globe will not render with any React version after v.17
2. Install nvm
3. nvm install node v.16.15.1
4. Ruby environment setup
5. Install Postgres

**Home: A draggable globe with geo-location enabled to select a country**
(https://user-images.githubusercontent.com/99378787/178910615-d4435a34-e322-416b-abb0-45d4040d1398.png)

**Sample results after clicking country**
<img width="1130" alt="image" src="![image](https://user-images.githubusercontent.com/99378787/178910732-34f7a2d2-e5e7-4391-b458-ca80e7a79bcb.png)">

**Filter by Lodging, Food, or Experiences**
<img width="1130" alt="image" src="![image](https://user-images.githubusercontent.com/99378787/178910847-8413e511-08a3-4d56-99d0-db51b80685f6.png)">

**Account page where I can see/delete my posts, upload a new post or edit my profile**
<img width="1130" alt="image" src="![image](https://user-images.githubusercontent.com/99378787/178911242-51e6e48f-57f6-47cd-8ed8-89c571c156dc.png)">


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

