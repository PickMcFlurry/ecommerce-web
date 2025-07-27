# E-commerce Store

# Live Preview

[https://bardan-ecommerce.netlify.app/](https://bardan-ecommerce-web.netlify.app/)

## Project Overview

A modern e-commerce web application designed to showcase and sell fashion products. It features a clean, responsive design, product listings, detailed product pages, and a user-friendly interface. The application is built with React and leverages GSAP for smooth animations, providing an engaging user experience.

## Features

- **Home Page**: Engaging hero section with animated text, featured products, an "About Us" section, customer reviews, and a newsletter signup.
- **Product Listing**: Browse all available products with filtering options by category, and sorting by price (low to high, high to low) and rating.
- **Product Details Page**: View detailed information about each product, including description, price, rating, and options to adjust quantity and add to cart.
- **Search Functionality**: Easily find products using the search bar on the products page.
- **Responsive Design**: Optimized for various screen sizes, from mobile devices to desktops.
- **Smooth Animations**: Utilizes GSAP for dynamic and visually appealing transitions and effects.
- **Login Page**: A dedicated login interface for user authentication.
- **Footer**: Contains quick links, extra links, and a quick enquiry form.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **GSAP (GreenSock Animation Platform)**: A powerful JavaScript animation library for creating high-performance animations.
- **React Router DOM**: For declarative routing in React applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **Lucide React**: A collection of beautiful and customizable open-source icons.

## Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or Yarn

### Steps

1.  **Clone the repository:**
    \`\`\`bash
    git clone https://github.com/PickMcFlurry/ecommerce-wev.git
    cd ecommerce-web
    \`\`\`

2.  **Install dependencies:**
    \`\`\`bash
    npm install or npm i
    npm install axios
    npm install gsap
    npm install @gsap/react
    npm install lucide-react
    npm install react-router-dom

3.  **Start the development server:**
    \`\`\`bash
    npm run dev

    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

- **Home Page (`/`)**: Explore the main landing page with featured content.
- **Products Page (`/products`)**: Browse all products, use the search bar, filter by category, and sort by price or rating.
- **Product Details Page (`/product/:id`)**: Click on any product from the listings to view its detailed information.
- **Login Page (`/login`)**: Access the login interface.

## Project Structure

```
.
├── public/
│ └── ... (static assets)
├── src/
│ ├── assets/
│ │ └── images/ (project images)
│ ├── components/
│ │ ├── About.jsx
│ │ ├── Featured.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Login.jsx
│ │ ├── Navbar.jsx
│ │ ├── Newsletter.jsx
│ │ ├── Reviews.jsx
│ │ └── Services.jsx
│ ├── constants/
│ │ └── index.js (application constants like navigation links, reviews)
│ ├── pages/
│ │ ├── Index.jsx (Home page)
│ │ ├── ProductDescription.jsx
│ │ └── Products.jsx
│ ├── Ui/
│ │ └── SplitText.jsx (GSAP text splitting component)
│ ├── utils/
│ │ └── utils.js (utility functions and image imports)
│ ├── App.jsx (Main application component with routing)
│ ├── index.css (Global styles and Tailwind directives)
│ └── main.jsx (React entry point)
├── index.html (HTML entry file)
├── package.json (Project dependencies and scripts)
├── postcss.config.js (PostCSS configuration for Tailwind CSS)
├── tailwind.config.js (Tailwind CSS configuration)
├── vite.config.js (Vite build configuration)
└── README.md (This file)
```

## API

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data.

- **All Products**: `https://fakestoreapi.com/products`
- **Single Product**: `https://fakestoreapi.com/products/:id`

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Bardan Grg**
- GitHub: [https://github.com/PickMcFlurry]
