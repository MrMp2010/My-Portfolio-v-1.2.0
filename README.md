# My-Portfolio-v-1.2.0
A comprehensive React-based e-commerce platform demonstrating product management, shopping cart functionality, and user authentication with a mock backend. This project showcases modern front-end development practices and serves as a robust example for a developer's portfolio.

## 🚀 Project Overview

This project is a multi-functional e-commerce web application built with React, designed to provide a seamless shopping experience for users and robust administrative functionalities. It addresses common e-commerce needs such as product display, shopping cart management, secure user authentication, and basic user/product administration.

## ✨ Key Features

* **Product Catalog:** Browse a diverse range of digital products with detailed product pages.
* **Shopping Cart:** Add, remove, and update quantities of items in a dynamic shopping cart.
* **User Authentication:** Secure user registration, login, and logout functionalities with protected routes.
* **Dark/Light Mode:** Toggle between dark and light themes for an enhanced user experience.
* **Product Search & Filtering:** Easily search for products and filter them by category.
* **Responsive Design:** Optimized for various screen sizes, from mobile devices to desktops.
* **Mock Backend:** Utilizes `json-server` for a lightweight, local API to manage users and product data.
* **Admin Dashboard:** Basic dashboard and user management features (requires authentication).

## 🛠️ Technologies Used

* **Frontend:**
    * [React 19](https://react.dev/) - A JavaScript library for building user interfaces.
    * [React Router DOM 7](https://reactrouter.com/en/main) - For declarative routing in React applications.
    * [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.
    * [Bootstrap 5](https://getbootstrap.com/) - Popular CSS framework for responsive, mobile-first front-end development.
    * [Yup](https://github.com/jquense/yup) - JavaScript schema builder for value parsing and validation.
    * `useState`, `useEffect` hooks - For managing component state and side effects.
    * CSS (with custom fonts like Vazirmatn) - For styling and theme management.
    * [React Loading Skeleton](https://www.react-loading-skeleton.com/) - For displaying loading placeholders.
* **Backend (Mock):**
    * [json-server](https://github.com/typicode/json-server) - A full fake REST API with zero coding.
    * [json-server-auth](https://github.com/jeremydumornay/json-server-auth) - For adding authentication to `json-server`.
    * [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For implementing JWT-based authentication.

## ⚙️ Installation and Setup

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/mrmp2010/React-E-commerce-Portfolio.git](https://github.com/mrmp2010/React-E-commerce-Portfolio.git)
    cd React-E-commerce-Portfolio
    ```

2.  **Install dependencies:**
    This project uses `npm`. Navigate to the project root and install all necessary packages:

    ```bash
    npm install
    ```

3.  **Start the mock backend server:**
    The project relies on `json-server` for a local API. Run the following command in a **separate terminal** to start the mock server:

    ```bash
    npm run server
    ```
    This will typically run on `http://localhost:8000`. The `db.json` file contains initial user data and login tokens.

4.  **Start the React development server:**
    In your main terminal, start the React application:

    ```bash
    npm start
    ```
    The application should open in your browser, usually at `http://localhost:3000`.

## 🚀 How to Use

Once the application is running:

* **Navigate:** Use the circular links on the initial home page to go to different sections (Page 1 for e-commerce, Page 2 for a product counter demo, Page 3 for user/product management).
* **Browse Products (Page 1):** Explore products on the `Products` page. You can filter by category or use the search bar.
* **Product Details (Page 1):** Click on any product to view its detailed information.
* **Add to Cart (Page 1):** Add products to your shopping cart from product listings or detail pages.
* **Shopping Cart (Page 1):** Access your cart via the cart icon in the navigation bar to review items, adjust quantities, or remove items.
* **User Authentication (Page 3):**
    * **Login:** Access the login page (`/page3/login`). You can use existing mock user credentials (e.g., from `db.json`) or register a new account.
    * **Register:** Create a new user account (`/page3/register`).
    * **Protected Routes:** Features like the `Dashboard`, `Users` list, and `Cart` within Page 3 are protected and require a logged-in user.
* **Dark Mode (Page 1):** Toggle the theme between light and dark mode using the sun/moon icon in the navigation bar.
* **Homepage:** A visual of the main landing page.
* **Product List:** An image showing products with filtering and search.
* **Shopping Cart:** A screenshot of the cart with items added.
* **Login/Register Forms:** A visual of the user authentication forms.
* **Dark Mode:** A side-by-side comparison or a single image demonstrating dark mode.
* **Admin Panel (Page 3):** Screenshot of the dashboard or user list.

## ⚖️ License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code for personal and commercial purposes, provided that the original copyright and license notice are included.

## 🤝 Contributing

We welcome contributions to this project! If you have ideas for improvements, new features, or bug fixes, please follow these steps:

1.  **Fork** this repository.
2.  **Clone** your forked repository to your local machine.
3.  Create a new **branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
    or
    ```bash
    git checkout -b bugfix/issue-description
    ```
4.  Make your **changes** and ensure the code adheres to the existing style and best practices.
5.  **Test** your changes thoroughly.
6.  **Commit** your changes with clear and descriptive commit messages.
    ```bash
    git commit -m "feat: Add new feature"
    # or
    git commit -m "fix: Resolve bug in X"
    ```
7.  **Push** your branch to your forked repository on GitHub.
    ```bash
    git push origin feature/your-feature-name
    ```
8.  Open a **Pull Request** to the `main` branch of the original repository, describing your changes in detail.

## 💡 Future Development

Here are some ideas for future enhancements and improvements to the project:

* **API Integration:** Replace the mock `json-server` backend with a real RESTful API (e.g., Node.js with Express, Python with Django/Flask) for persistent data storage.
* **Payment Gateway Integration:** Implement a secure payment gateway (e.g., Stripe, PayPal) for actual transactions.
* **State Management:** Introduce a more robust state management library like Redux Toolkit or Zustand for complex global state.
* **Advanced Search & Filtering:** Implement more sophisticated search capabilities, including sorting options and advanced filters.
* **User Profiles:** Allow users to manage their profiles, view order history, and save preferences.
* **Admin Panel:** Develop a more comprehensive admin dashboard for managing products, orders, and users.
* **Image Optimization:** Implement image optimization techniques for faster loading times (e.g., lazy loading, responsive images).
* **Accessibility (a11y):** Further enhance accessibility features to ensure the application is usable by everyone.
* **Testing:** Expand unit and integration tests to cover more components and functionalities.

---

## 🆚 Comparison with Previous Version (`v1.0.0`)

This version (`v1.2.0`) marks a significant upgrade from its predecessor (`v1.1.0`). The previous iteration was a foundational portfolio piece, likely focusing on basic React concepts and component display. This updated version transforms it into a functional e-commerce platform by introducing:

* **Comprehensive E-commerce Flow:** Full implementation of product listing, detailed views, and an interactive shopping cart.
* **Robust User Authentication:** Integration of login, registration, logout, and protected routes with a mock backend.
* **Enhanced UI/UX:** Significant improvements in design, responsiveness, and interactive elements across all pages.
* **Modular Architecture:** Better organization of components and pages for improved maintainability and scalability.
* **Search and Filtering:** Added core e-commerce functionalities for product discoverability.

This version evolves from a simple showcase to a more practical and feature-rich application, demonstrating a deeper understanding of front-end development principles and architectural design.

