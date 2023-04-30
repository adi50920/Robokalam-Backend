README
This code is a React application that contains two components: Form and Fetch. The Form component includes a form that allows users to input their name, email, age, and password. The input fields are validated to ensure that the user enters the correct type of data in each field. The Fetch component sends a request to the server to retrieve and display data from a specified endpoint.

<b>Getting Started</b>

Clone this repository to your local machine.

Navigate to the client and server folder in your terminal.

Install the project dependencies by running npm install in your terminal.

Start the development server by running npm start.

Create a file named ".env" inside the server folder and paste the below content inside it : {

PORT=8000
DATABASE_URL="mongodb+srv://aditya:aditya@practice.3i8o867.mongodb.net/?retryWrites=true&w=majority"

}

Open http://localhost:3000 in your browser to view the application.

<b>Code Overview</b>

<b>App.js</b>

The App.js file contains the App component, which renders the Form and Fetch components.


<b>Form.js</b>

The Form.js file contains the Form component, which includes a form that allows users to input their name, email, age, and password. The useForm hook from the @mantine/form library is used to manage the state of the form and validate the user inputs. The axios library is used to make a POST request to the server when the form is submitted.

<b>Fetch.js</b>
The Fetch.js file contains the Fetch component, which sends a GET request to the server to retrieve data from a specified endpoint. The retrieved data is then displayed in the component.

<b>Dependencies</b>

@mantine/core

@mantine/form

axios



<b>Screenshot :</b>

![FireShot Capture 008 - React App - localhost](https://user-images.githubusercontent.com/98736611/235356429-a17fe1f1-d8a9-45cc-b284-84c217295e39.png)





