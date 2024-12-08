# AirDnD - A Node.js Airbnb Clone

AirDnD is a clone web application of Airbnb, built using Node.js, Express, MongoDB, and EJS for server-side rendering. The project features user authentication, user authorization, listing management, and a user-friendly interface for exploring and managing property listings.


# Features

* User Authentication: Secure user login and signup using Passport.js.
* Authorization: Listings are associated with their respective creators, ensuring only authorized users can edit or delete them.
* Add and Manage Listings: Users can create new listings, update existing ones, and delete them.
* View Listings: Browse available property listings with detailed information.
* Review System: Users can leave reviews for listings.
* User-Friendly Interface: Intuitive design for seamless navigation and interaction.


# Tech Stack

* Backend: Node.js, Express.js
* Frontend: EJS (Embedded JavaScript)
* Database: MongoDB
* Authentication: Passport.js


# Dependencies

Here are the key dependencies used in this project:

* express: Framework for building web applications.
* mongoose: ODM library for MongoDB.
* passport: Authentication library.
* passport-local: Local strategy for Passport.
* passport-local-mongoose: Mongoose plugin for Passport integration.
* ejs: Template engine for server-side rendering.
* method-override: HTTP method override for PUT and DELETE requests.
* connect-flash: Flash messages for notifications.
* express-session: Session management.
* joi: Schema validation for request data.


# Folder Structure

airdnd/

├── models/           # Mongoose models for listings, users, etc.

├── routes/           # Route handlers for different functionalities

├── views/            # EJS templates for server-side rendering

├── public/           # Static files (CSS, images, etc.)

├── app.js            # Main application file

└── package.json      # Project metadata and dependencies


# How to Use

* Signup/Login: Create an account or log in to access additional features.
* View Listings: Browse property listings with descriptions.
* Add Listings: Create new property listings with relevant details.
* Manage Listings: Edit or delete your listings directly from the dashboard.
* Leave Reviews: Add reviews to existing listings to share your feedback.


# Future Enhancements

Add support for image uploads for listings.
Implement advanced search and filtering functionality.
Introduce a rating system for listings.
Enhance the UI/UX with modern design principles.
