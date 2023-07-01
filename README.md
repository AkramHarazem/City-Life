# CityLife-Web

CityLife is a React-based responsive website using Bootstrap, developed as an ITI graduation project. It provides comprehensive information about facilities and services in Al Rehab, Cairo, Egypt for residents and Users.

## API data
All data on our website is real data, we used `json-server` and deployed it on `cyclic`.

## Normal visitor
can explore all city's services and entertainment, leave feedback, view others' feedback, and submit complaints.

## resident
can do what regular visitor do besides paying all his bills and subscriptions, submitting complaints to city hall, reserving cinema tickets, booking clinic appointments in any medical center after reservation or booking two emails have been sent to the user and the cinema or medical center, exploring all information about inside and outside city transportation, and more.

## Sign up and sign in
we collect all details of a user to ensure he or she is a resident of the city.
our sign-up & sign-in operations are integrated with an online API server with generated user tokens.

## Token
we use tokens to allow users open for example payments & complaints by a protected route technique, also use it to authorize only one account (Admin) to use the dashboard.

## Dashboard
Admin can edit, delete and add any data to the website, also can receive all feedback, complaints, and contact us messages to filter them and interact with valid ones.

## Technologies 
we used `Reactjs`, `bootstrap`, `Material UI`, `json-server`, `stripe` for payment, `i18next` for localization (Arabic and English), `jwt-decode`, `axios` and `uuid`.

## Run the project
you need only to enter the server folder and open the terminal then write `node server.js start` or `nodemon start` and follow the link, as I linked my client side with the payment server side to run on the same link in our case here `http://localhost:5253/`.

and you can also explore our website on this [link](http://16.170.250.23/) as I run my project on an AWS EC2 machine to make it easy to explore and check my website  

