# MyReads Project

To get started using application, in the file, in the command line:

* install all project dependencies with `npm install`
* start the development server with `npm start`

* SECOND SUBMISSION
* This is my first time submitting via git and I have atempted to tailor my commit message to the guidlines. If there any any short coming on my part in this regard, please let me know.
* This application is the result of create-react-app, cloning the _DATA.js file and   adding the requisite functionality.
* The images for the user profiles were taken from the provided user images in the chirper react data in the chirper project. Incidentally, they were aready labeled with the 'would-you-rather-project'
* The app.js file runs the application and has the application's routing. 
* Upon loading, the login page is rendered. When a user is selected, the app loads the displayPolls page. The page renders the user's unanswered poll questions and will display the answered ones at the push of a button.
* the unanswered page display the tro poll options on radials and submit will not be useable until an option is selected. Only one option can be selected. upon submission, the poll and user data is updates and the pollPage now renders the answered page.
* the answered page displays the two options for the poll, display the number of votes for each option relative to the total number of votes on the poll and display the percentage.
* Every page has the NavBar rendered at the top, but pages are only accesible if logged in.
* the addPoll page takes two fields of input and cannot be submitted until both fields have values. Upon submission, the page directs to the displayPolls page with the users and polls having been updated.
* the leader board displays each user in decending order by the sum of the questions the user made and displays their total.
* the application uses react and the information for the app is kept in the redux store. All changes to data are changed in the store. Local state is only used for basic functionality.