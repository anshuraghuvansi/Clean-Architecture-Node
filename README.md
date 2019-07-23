# Clean Architecture Nodejs

This is a Rest Api(express, Nodejs and mongodb) project based on clean architecture.
In this project i have implemented 4 API's:
1. `signup` api(POST) 
    On successful signup this api return a JWT Web Token.
2. `signin` api(POST)
    On successful signin this api return a JWT Web Token.
3. `Get profile` api(GET)
    This api use the JWT token from the `Authorization Header` from the request to autorize and return user data.
4. `Update profile` api(PUT)
    This api use the JWT token from the `Authorization Header` from the request to autorize and update user data.

# How to Use

1. Clone this project on your machine.
2. Run mongo db on your local machine or change the `DB_URI` in `.env` file.
3. Then run `npm install`
4. And then run `npm run debug`

# Docker

1. Run docker on your machine 
2. Download the project and cd into it.
3. Run `docker-compose up`

Now you can access app on url `localhost:8080`
