# date and thyme
A full-stack APS.NET/React web application that keeps track of your budding blu-ray collection.  Utilizes a React frontend Axios API calls deployed on Netlify, and a ASP.NET backend deployed on Azure that interacts with a PostgreSQL database, all authorized by Auth0.  Built by [Joe Gilberto](https://joekgilberto.com/).

## Deployment
Find the app deployed on Netlify, here: [https://blu-rave.netlify.app//](https://blu-rave.netlify.app/)

## Screenshots

### Home
![Home](./lib/home-logout.png)
As a user, I want to land on a well styiled home page when I visit the application.

### Home (Signed In)
![Home (Signed In)](./lib/home-login.png)
As a user, once signed in I want to access more, authenticated options.

### Collection (Films)
![Collection (Films)](./lib/index-film.png)
As a user, I want to be able to access my blu-ray collection to view all my films.

### Collection (TV)
![Collection (TV)](./lib/index-tv.png)
As a user, I want to be able to access my blu-ray collection to view all my television shows.

### New Blu-Ray
![New Blu-Ray](./lib/new.png)
As a user, I want to be able to add blu-rays to my collections.

### Show Blu-Ray
![Show Blu-Ray](./lib/show.png)
As a user, I want to be able to see all information on individual blu-rays.

### Edit Blu-Ray
![Edit Blu-Ray](./lib/edit.png)
As a user, I want to be able to edit the blu-rays in my collection.

## Technologies Used

For the frontend, I utlized [React](https://react.dev/) components combined with [Axios](https://axios-http.com/) to make API calls to my backend.  My backend was built using [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) and interacting with a [PostgreSQL](https://www.postgresql.org/) database.  User's are authenticated by signing in with [Auth0](https://auth0.com/).

### Resources
Below are specific relevant resources I referenced while building this application.

- [A public domain disc image from Wikimedia.](https://commons.wikimedia.org/wiki/File:RVT-R_disc_data_side_(white_background).png) that I used for the background.
- [An article from Travis Media on creating a React and .NET project in VSCode.](https://travis.media/how-to-create-react-app-net-api-vscode/)
- [An article from Francesco Ciulla on building a C# CRUD Rest API.](https://dev.to/francescoxx/c-c-sharp-crud-rest-api-using-net-7-aspnet-entity-framework-postgres-docker-and-docker-compose-493a)
- [The Auth0 quickstart guides to implement authentication and authorization.](https://auth0.com/docs/quickstarts)

## Instructions for Local Deployment
The following instructions were used through macOS with a silicone M1 chip.

### Fork and clone
To deploy locally, fork and clone this repo.

### Install .NET 7.0
First, install .NET 7.0 here: [https://dotnet.microsoft.com/en-us/download/dotnet](https://dotnet.microsoft.com/en-us/download/dotnet)

### Add service dependencies
Navigate to the service directory.  Then, add the needed dependencies below:
```
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```
```
dotnet add package Microsoft.AspNetCore.OpenApi
```
```
dotnet add package Microsoft.EntityFrameworkCore.Design
```
```
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```
```
dotnet add package Swashbuckle.AspNetCore
```

### Create a local database
Then, create a local PostgreSQL database.
```
createdb blu_rays 
```

## Create an Auth0 Application
Next, follow this Auth0 quickstart guide [(https://auth0.com/docs/quickstarts))](https://auth0.com/docs/quickstarts) to create a Backend/API you will use in your service end, selecting the ASP.NET Core Web API option, and then working into the Single Page App tutorial you will use in your client end, choosing the React option.


### Create backend environmental variables
Still in the backend directory, create environmental variables starting with your PostgreSQL connection string:
```
export CONNECTION_STRING=<your database connection string>
```

STUFF

Finally add the url for your client application, to be a whitelested CORS origin:
```
export CORS_ORIGIN=http://localhost:3000/
```

### Spin up backend server
For the final step of your backend set up, spin up the server with the following command:
```
 python3 manage.py runserver
```

### Install frontend dependencies
For the first step of your frontend set up, navigate into your frontend directory via your terminal and install your dependencies.
```
npm i
```

### Create frontend environmental variables
Next, create your environmental variables:
```
touch .env.local
```
Then, add your database environmental variables to interact with your backend (running on localhost:8000):
```
REACT_APP_FOOD_API_URL=http://localhost:8000/food-items/
REACT_APP_NOTIF_API_URL=http://localhost:8000/notifications/
REACT_APP_AUTH_API_URL=http://localhost:8000/api-token-auth/
REACT_APP_USER_API_URL=http://localhost:8000/user/
```

### Spin up your frontend server
Finally, while still in your frontend directory, spin up your front server:
```
npm start
```

### Browse
Now, you can go to localhost:3000 in your browser (Google Chrome is reccommended for best performance) and browse the application.

## Current User Flow
Firstly, visit [https://date-and-thyme.netlify.app/](https://date-and-thyme.netlify.app/)

From the home page, the user can read up on the application.  The user can then sign in (through the button on the homepage or header) to access the application.  Once on the authorization page, a returning user can sign in and a new user can sign up.  If a returning user were to attempt to sign up with the same credentials, they would be automatically logged in.  After logging in, users can navigate the site throuhg the header's nav.  Through "Add Groceries" they can add food items and their expiration date to their fridge.  The user can check what items are in the fridge through the "Fridge" navigation link, and can click on those items to view further details, edit those details, or delete the grocery item.  Then, through the fridge icon in the navigation, users can see what notifications they have (reminding them when food has 5 or less days, warning them when food has 2 or less days, and alerting them when the food has expired).  The notifications will update every time the user opens the app.

## Future Features
Features to be added in further edits:
- The ability to track what food is eaten, what food is discarded after expiration, and which items are neutrally deleted.
- Users will receive email and/or text notifications when food is about to go bad
- When viewing a grocery item's detail page, the OpenAI API will generate and return one recipe with said grocery item.
