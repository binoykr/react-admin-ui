## Create React App

In order to create the [React](https://www.w3schools.com/react/default.asp) application, you should set up a React Environment on your computer. For this, I am using the create-react-app. The create-react-app is an officially supported way to create React applications.

If you have NPM and Node.js installed, you can create a React application by first installing the create-react-app.

Install create-react-app by running this command in your terminal:

* npm install -g create-react-app

Next to create and run the react applciation, execute this commands:

* npx create-react-app ui
* cd ui/
* npm start

After exectuing the *npm start* command, we can use "localhost:3000" in browser to open the React application.

## Integrating the Bootstrap 4.0 in React Application

For integrating the [bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/) in the application, need to includes the bootstrap css and java script libraries in the *public/index.html* file. 

CSS link can be included in the header section:

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

Java script files can be included in the header section:

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  


## Reference
* [React Rounter](https://codeburst.io/getting-started-with-react-router-5c978f70df91)
* [Login](https://bootsnipp.com/snippets/vl4R7)
* [Dashboard](https://bootsnipp.com/snippets/Q0dAX)
