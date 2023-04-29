README
This code is a React application that contains two components: Form and Fetch. The Form component includes a form that allows users to input their name, email, age, and password. The input fields are validated to ensure that the user enters the correct type of data in each field. The Fetch component sends a request to the server to retrieve and display data from a specified endpoint.

Getting Started

Clone this repository to your local machine.

Navigate to the client and server folder in your terminal.

Install the project dependencies by running npm install in your terminal.

Start the development server by running npm start.

Create a file named ".env" inside the server folder and paste the below content inside it : {

PORT=8000

DATABASE_URL="mongodb+srv://aditya:aditya@practice.3i8o867.mongodb.net/?retryWrites=true&w=majority"

}

Open http://localhost:3000 in your browser to view the application.

Code Overview

App.js

The App.js file contains the App component, which renders the Form and Fetch components.


Form.js

The Form.js file contains the Form component, which includes a form that allows users to input their name, email, age, and password. The useForm hook from the 

@mantine/form library is used to manage the state of the form and validate the user inputs. The axios library is used to make a POST request to the server when the 

form is submitted.

Fetch.js

The Fetch.js file contains the Fetch component, which sends a GET request to the server to retrieve data from a specified endpoint. The retrieved data is then displayed in the component.

Dependencies

@mantine/core

@mantine/form

axios

react

react-dom

react-scripts






