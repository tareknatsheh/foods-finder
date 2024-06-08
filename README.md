### Demo
Checkout a working demo [here](https://foody-finder-ba21ac39bc09.herokuapp.com/)

-----
This CRUD Restaurants app using the following:

**Backend**
- Node js with typescript
- Express
- Mongoose (for the MongoDB database)

**FrontEnd**
- React js framework with typescript
- React Router version 6.14.2
- Jest and React-Testing-Library for the unit tests
- Bootstrap for the styling
- Basic user authentication and login using Auth0

<br>

# Quick start #
Using Docker:

    docker-compose up

If you don't want to use docker, then follow the steps:

# Backend #

> [!NOTE]
> You should have a running Mongodb instance running locally for the backend to have the database functionalities. Configure a .env variable like this: MONGODB_URI=mongodb://127.0.0.1:27017/foods-finder

## Install API dependancies ##

    npm install

## Run the API Nodejs server ##

    npm run dev_api

<br>

# Frontend #

## Install Frontend Reactjs app dependancies ##
Navigate to app folder 

    cd app

<br>
Install dependencies

    npm install

## Run Reactjs app locally ##
While in the root project folder run 

    npm run dev_app

## Run tests
Note: it only runs tests for the Reactjs app, not the Nodejs backend <br>
`npm run test`
