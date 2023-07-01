# CityLife-Web

CityLife-Web is a responsive website built using React and Bootstrap. It serves as an information hub for residents and visitors of Al Rehab, Cairo, Egypt, providing comprehensive details about facilities and services in the city.

## API data
All the data on our website is real and sourced from an API. We utilize `json-server` and have deployed it on `cyclic` to provide seamless access to the data.

## Visitor Experience
As a normal visitor, you can explore all the services and entertainment options available in the city. Additionally, you have the ability to leave feedback, view feedback from others, and submit complaints.

## Resident Experience
If you are a resident, you can enjoy all the features available to normal visitors, along with additional functionalities. This includes paying bills and subscriptions, submitting complaints directly to the city hall, reserving cinema tickets, and booking clinic appointments. When making reservations or bookings, confirmation emails are sent to both the user and the respective cinema or medical center. Moreover, you can access detailed information about transportation options within and outside the city.

## Sign up and sign in
To ensure that only residents have access to certain features, we collect detailed information during the sign-up process to verify their residency. Our sign-up and sign-in operations are integrated with an online API server that generates user tokens for authentication.

## Token Usage
Tokens play a crucial role in our website's functionality. They are utilized to grant access to protected routes, such as payments and complaint submissions. Tokens also enable us to authorize a single account (Admin) to access the dashboard.

## Dashboard
The dashboard is accessible only to the Admin account. From here, the Admin can edit, delete, and add any data to the website. Additionally, the Admin can review feedback, complaints, and contact messages, allowing them to filter and respond to valid ones.

## Technologies Used
We have employed several technologies in the development of CityLife-Web, including `ReactJS`, `Bootstrap`, `Material UI`, `json-server`, `Stripe` for payment processing, `i18next` for localization in Arabic and English, `jwt-decode` for token decoding, and `axios` for making API requests. The project also utilizes `UUID` for generating unique identifiers.

## Run the project
To run the project locally, navigate to the server folder, open the terminal, and run the command `node server.js start` or `nodemon start`. This will start the server, and you can access the website through the following link: http://localhost:5253/. Alternatively, you can explore our website on this [link](http://16.170.250.23/), as we have deployed it on an AWS EC2 machine to facilitate easy exploration and evaluation.

We hope you enjoy exploring CityLife-Web and find it helpful in discovering all the services and amenities Al Rehab has to offer.

