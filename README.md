# YumSearch

<p align="center">
  <img src="readMeImgs/SnackTrackHome.png" alt="YumSearch Banner" width="600" height="300" class="centered-image" />
</p>

YumSearch is a recipe exploration web application that uses the Spponacular API from APILayers and is built using Redux with a backend in MongoDB. It allows users to login into their existing accounts/ create new account and search for various recipes. The application displays the top 10 results from the API. For each recipe, the user can access its nutritional values (that can be changes with a custom serving size) and the steps to the prepare the recipe. They can also add it to their lists of Favourites. With its user-friendly interface and comprehensive database, YumSearch enables individuals to explore different kinds of recipes and add it to their list of favoruite recipes.

This project was made in order to apply my learning of Redux and its connection to MongoDB using Mongoose. 

## Features

- **Login/Signup Feature**: Login into your account or create a new one.
- **Search Functionality**: Search for recipes by name and get the top 10 results matching the search query.
- **Flexible Serving Size**: Nutrient values adjust dynamically based on the serving size you choose.
- **Add/Remove from Favourites**: Add/remove any recipe from the list of favourites.
- **Detailed Food Pages**: Individual recipe pages display the name, image, nutrient values,serving size input, and the steps to prepare the recipe for a specific recipe. Nutrient values includes percents of proteins, fat and carbs.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org).

### Installation

1. Create a main folder where you can clone the frontend and backend folders
2. Clone the frontend repository: `git clone https://github.com/varuni24/recipe-website-frontend.git`
3. Clone the backend repository: `git clone https://github.com/varuni24/recipe-website-backend.git`
4. Install the dependencies for both the backend and frontend by navigating into each folder seperately and running the command: `npm install`


### Usage

Run the frontend and backend servers on seperate windows: `npm start`


## Feedback and Support

Any feedback you have on YumSearch is appreciated. If you encounter any issues or have suggestions for improvement, please let me know!

For support or inquiries, you can reach out to me on Linkedin: https://www.linkedin.com/in/varunigupta/.
