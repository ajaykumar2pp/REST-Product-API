# 🌟 Product API 🚀

Welcome to the **Product API** repository! This is a RESTful API built with Node.js, Express, and MongoDB for managing products in an inventory system. It's designed to be simple, yet scalable for any product-based application.

---

## 📋 **Features**

- 📦 **Add Products**: Easily add new products to your inventory.
- 🔄 **Update Products**: Modify existing product details (name, price, category, stock, rating etc.).
- ❌ **Delete Products**: Remove products from your system.
- 🔍 **Fetch Products**: Retrieve a list of products or details of a specific one.
- 🛠️ **Swagger Documentation**: Comprehensive API documentation using Swagger UI.
- ⚡ **Real-Time Updates**: Instant product updates via WebSocket (Socket.IO).

---

## ⚙️ **Technologies Used**

| Technology   | Description                                |
|--------------|--------------------------------------------|
| 🟢 **Node.js**    | JavaScript runtime for building the API  |
| 🚀 **Express**    | Fast, unopinionated, minimalist web framework |
| 🍃 **MongoDB**    | NoSQL database for storing product data  |
| 📄 **Swagger**    | API documentation made easy            |
| 🔗 **Socket.IO**  | Real-time event-based communication    |

---

## 🔧 **Installation and Setup**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ajaykumar2pp/REST-Product-API.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd product-api
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   
5. **Start the server**:
 ```bash
 npm start
 ```

6. **Access the API**:
- Base URL: `http://localhost:5000`
- Swagger UI Documentation: `http://localhost:5000/api-docs`

---

## 📚 **API Endpoints**

### 🚀 **Products**

| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| `GET`  | `/api/products`      | Retrieve all products                |
| `GET`  | `/api/products/:id`  | Retrieve a specific product by ID    |
| `POST` | `/api/products`      | Add a new product                    |
| `PUT`  | `/api/products/:id`  | Update an existing product by ID     |
| `DELETE`| `/api/products/:id` | Delete a product by ID               |

---

## 🛠️ **Swagger Documentation**

You can view the full API documentation with Swagger UI. Simply visit the following URL after running the server:

📄 [**Swagger UI Documentation**](http://localhost:5000/api-docs)

---

## 🏗️ **Folder Structure**

```bash
├── src
│   ├── config        # Database configuration
│   ├── controllers   # Request handlers
│   ├── models        # Mongoose models
│   ├── routes        # API routes
├── swagger           # Swagger documentation
├── .env              # Environment variables
├── app.js            # Main application file
└── README.md         # Project documentation


