# walmart-ecom-app

A full-stack application built with **Spring Boot** and **React** that allows users to upload a CSV file containing product data, processes it on the backend, and displays the data dynamically on the frontend using **Recharts** for visualizations.

---

## Features

- **CSV File Upload:** Upload CSV files containing product data through the frontend.
- **Data Processing:** Backend parses and validates the CSV, then stores the data in a database.
- **Dynamic Visualizations:** 
  - Bar Chart: Displays product prices by name.
  - Line Chart: Shows product prices over IDs.
  - Pie Chart: Visualizes product categories distribution.
- **Error Handling:** Meaningful error messages for invalid files or backend issues.
- **Modular Design:** Backend and frontend can be deployed independently.

---

## Technologies Used

### **Backend:**
- **Java** with **Spring Boot**
- **Spring Data JPA** for database interaction
- **Apache Commons CSV** for CSV parsing
- **H2 Database** (or any SQL-based database)
- **Maven** for project management

### **Frontend:**
- **React** with **Axios** for API requests
- **Recharts** for data visualization
- **HTML/CSS** for styling

---

## Installation and Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/walmart-ecom-app.git
cd walmart-ecom-app
2. Backend Setup
a. Navigate to the Backend Directory:
bash
  
cd backend
b. Run the Application:
Ensure you have Java 17+ and Maven installed.

bash
  
mvn spring-boot:run
The backend will start on http://localhost:8080.

3. Frontend Setup
a. Navigate to the Frontend Directory:
bash
cd ../frontend
b. Install Dependencies:
bash
  
npm install
c. Start the Development Server:
bash
  
npm start
The frontend will start on http://localhost:3000.

Usage
Upload a CSV File: Use the upload form on the frontend to upload a CSV file.

Example CSV Format:

name,price,category,description
Laptop,1200.99,Electronics,High-end gaming laptop
Headphones,199.99,Electronics,Noise-cancelling headphones
Chair,89.99,Furniture,Ergonomic office chair
View Uploaded Data:

The product data will be displayed in:
A table format.
Dynamic charts: bar chart, line chart, and pie chart.
Analyze Visualizations: Use the visual insights to understand the data better.

API Endpoints
Method	Endpoint	Description
POST	/api/csv/upload	Upload a CSV file
GET	/api/products	Retrieve all product data

Project Structure
backend/
├── src/
│   ├── main/
│   │   ├── java/com/ecommerce/ecommerce_app/
│   │   │   ├── controller/CsvController.java
│   │   │   ├── service/CsvService.java
│   │   │   ├── model/Product.java
│   │   │   └── repository/ProductRepository.java
│   └── resources/
│       ├── application.properties
├── pom.xml
Frontend
java
  
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CsvUploader.js
│   │   ├── ProductList.js
│   │   ├── BarChartExample.js
│   │   ├── LineChartExample.js
│   │   └── PieChartExample.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json


Improvements for Future
Add authentication for secured access.
Allow users to download processed data as a new CSV file.
Expand visualizations to include more chart types.
Support large-scale datasets with server-side pagination.
