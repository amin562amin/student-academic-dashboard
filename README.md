# Student Academic Dashboard 
A full-stack application that allows university teachers to categorise and display student academic information alongside admin functionality such as adding, editing and deleting student records.

## Tech Stack

- **React** - Used to create an interactive UI that updates when application state changes.
- **TypeScript** - Used to add types that clearly defined the structure of application data.
- **SQLite** - Database application used to store student information persistently.
- **Node.js** - Runtime that allows my backend JavaScript to execute outside the browser.
- **Tailwind CSS** - Used to handle visual styling. 
- **Express.js** - Used to handle API requests between the frontend and the database and return appropriate responses.

## Features 

- View all student records and academic information.
- Add new student records.
- Edit existing student information.
- Delete student records.
- Search for students.
- Filter students by qualification.
- Confirmation prompts before deleting records.
- Toast notifications for user actions.
- Loading states while student data is being retrieved.
- Error handling for failed API requests. 

## How it works

When the application first loads, the students state is initially empty. After the StudentProvider mounts, useEffect runs and calls a function that loads the student data.

The student service sends a GET request to the Express backend. Express handles the request and queries the SQLite database using SQL. SQLite returns the student records to Express, which sends the data back as JSON.

The student service returns this data to the StudentContext, where setStudents stores it in the students state. Updating the state causes React to re-render, displaying the student information on screen.
## Project Structure 

## Setup / Running Locally

## Screenshots 

## Future Improvements
