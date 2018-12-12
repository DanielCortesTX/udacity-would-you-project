Udacity-would-you-rather

* This application is the result of create-react-app, cloning the _DATA.js file and   adding the requisite functionality.
* The app.js file runs the application and has the application's routing. 
* Upon loading, the login page is rendered. When a user is selected, the app loads the displayPolls page. The page renders the user's unanswered poll questions and will display the answered ones at the push of a button.
* the unanswered page display the tro poll options on radials and submit will not be useable until an option is selected. Only one option can be selected. upon submission, the poll and user data is updates and the pollPage now renders the answered page.
* the answered page displays the two options for the poll, display the number of votes for each option relative to the total number of votes on the poll and display the percentage.
* Every page has the NavBar rendered at the top, but pages are only accesible if logged in.
* the addPoll page takes two fields of input and cannot be submitted until both fields have values. Upon submission, the page directs to the displayPolls page with the users and polls having been updated.
* the leader board displays each user in decending order by the sum of the questions the user made and displays their total.
* the application uses react and the information for the app is kept in the redux store. All changes to data are changed in the store. Local state is only used for basic functionality.

INSTALLATION

* install all project dependencies with:
   `npm install`

LAUNCH

* start the development server with 
  `npm start`

PACKAGE.JSON

* all necessary dependencies are listed in the file package.json located in the main file directory.