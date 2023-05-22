# EpyTodo - TODO App API

EpyTodo is a web API for creating and managing a TODO app. This project focuses on the backend implementation using Node.js. You have the option to build a frontend as a bonus.

## Prerequisites
- Node.js installed
- MySQL server running

## Installation
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd EpyTodo`
3. Install dependencies: `npm install`

## Configuration
1. Create a `.env` file in the root directory.
2. Add the following configuration variables to the `.env` file:
   - `MYSQL_DATABASE` - the name of your MySQL database
   - `MYSQL_HOST` - the host address of your MySQL server
   - `MYSQL_USER` - the username for accessing the MySQL server
   - `MYSQL_ROOT_PASSWORD` - the password for the MySQL server
   - `SECRET` - a secret key for JSON Web Token (JWT) encryption
   - `PORT`- the port number on which the web server will listen (e.g., `3000`)

## Database Setup
1. Create a file named `epytodo.sql`.
2. Define the database schema in the `epytodo.sql` file. Use the provided table descriptions for the `user` and `todo` tables.
3. Import the `epytodo.sql` file into your MySQL server. Run the following command in the project root folder:
```cat epytodo.sql | mysql -u root -p```
Enter your MySQL root password when prompted.

## Usage
1.  Start the server: `npm start`
2.  The API will be accessible at `http://localhost:3000`

## Postman

To test and interact with the EpyTodo API endpoints, you can use the provided `EpyTodo.postman_collection.json` file in Postman. Postman is a popular API development and testing tool that allows you to send HTTP requests and view the responses.

Here's how you can use the `EpyTodo.postman_collection.json` file:

1.  Download and install Postman from the official website ([https://www.postman.com/downloads/](https://www.postman.com/downloads/)), if you haven't already.

2.  Launch Postman and click on the "Import" button located in the top-left corner of the Postman interface.

3.  In the "Import" dialog, select the "File" tab and click on the "Choose Files" button.

4.  Navigate to the location where you have saved the `EpyTodo.postman_collection.json` file and select it.

5.  Click the "Import" button to import the collection into Postman.

6.  Once the collection is imported, you will see a new folder named "EpyTodo" in the left sidebar of Postman.

7.  Expand the "EpyTodo" folder to view the available API endpoints and requests.

8.  To make a request, select the desired endpoint, choose the appropriate HTTP method (e.g., POST, GET, PUT, DELETE), and click on the "Send" button.

9.  Postman will send the request to the specified endpoint, and you will be able to view the response, including the status code, headers, and body.

10.  Feel free to modify the requests, headers, or parameters according to your testing needs.


Using the `EpyTodo.postman_collection.json` file provides a convenient way to interact with the EpyTodo API without the need to manually construct each request. It also allows you to easily explore and test different API functionalities.

Note: Ensure that the EpyTodo API server is running and accessible before sending requests from Postman.