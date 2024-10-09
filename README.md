# Food Delivery Website

This is a full-stack food delivery website built using **React.js** for the frontend and **Node.js**, **Express.js**, and **MongoDB** for the backend. The website includes both user and admin functionalities. Users can browse through the menu, place orders, and track their order status, while the admin can manage products, view orders, and handle delivery status.

## Live Links

- **User Frontend**: [Food Delivery Website Frontend](https://food-delivery-website-frontend-ma6t.onrender.com/)
- **Admin Dashboard**: [Admin Dashboard](https://food-delivery-website-admin-pb3u.onrender.com/)

## Features

### User Frontend:
- Browse food items and add them to the cart.
- Secure user authentication (Signup/Login).
- View order summary and track orders.
- Checkout and payment simulation.

### Admin Dashboard:
- Admin login.
- Manage products (Add, Edit, Delete food items).
- View and manage customer orders.
- Update order delivery status.

## Technologies Used

### Frontend:
- **React.js**: Component-based architecture.
- **Axios**: For making HTTP requests.
- **React Router**: Navigation between different pages.
- **CSS/Bootstrap**: For styling.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **JWT**: For user authentication and authorization.
- **BCrypt**: For password hashing.
- **Mongoose**: ODM for MongoDB.

## Setup and Installation

To run this project locally, follow these steps:

### Clone the repository:
```bash
git clone https://github.com/Dipesh-Arwat/Food-Delivery-Website.git



# Installation

<h2>How to install/setup the Front-End</h2>

> Open a terminal in VS Code and go into the frontend folder and then run

>❗Open the frontend first [http://localhost:5173](http://localhost:5173)


```
npm install
npm run dev
```


<h2>How to install/setup the Admin Page</h2>

> Open a terminal in VS Code and go into the admin folder and then run

>❗Open the admin after the frontend. [http://localhost:5174](http://localhost:5174)

```
npm install
npm run dev
```
   
<h2>How to install/setup the Backend</h2>


Future Enhancements
Payment integration (e.g., Stripe).
Real-time order tracking.
> Open a terminal in VS Code and go into the backend folder and then run

```
npm start server
```
- [ ] Remember to include your Database in db.js and your Stripe Secret Key in .env


Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
