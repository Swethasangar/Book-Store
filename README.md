# Book-Store
This folder contains MERN Stack Project.
The Bookstore MERN Stack project is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. The project allows users to browse books, view detailed information about books, add books to a shopping cart, and manage user authentication.

Features
1.Authentication
Users can register and log in.
Google authentication is supported.
Redirection to login if unauthorized actions are attempted (e.g., adding items to the cart without logging in).

2.View Details
Users can view detailed information about each book, including:
Title
Author
Description
Price
Book cover image

3.Add to Cart
Logged-in users can add books to their cart.
Prevents duplicate items in the cart.
Displays success or error messages using notifications.

Technology Stack
Frontend
React.js
Tailwind CSS for styling
React Icons for UI elements
React Router for navigation
Toast notifications for user feedback

Backend
Node.js
Express.js
Database
MongoDB

Authentication
Firebase Authentication

Usage
Register/Login: Create an account or log in using your credentials.
Browse Books: View a list of available books with their details.
View Details: Click on any book to see its detailed description.
Add to Cart: If logged in, click the AddToCart button to add books to your cart.
