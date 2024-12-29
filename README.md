# 📜 To Do List

## 📖 Description
Hi! This Task List App is a simple task management application that allows users to easily organize, track, and manage their tasks. 

It provides a clean and intuitive interface for creating, editing, deleting, and commenting on tasks. The app uses Redux for state management and Local Storage to persist tasks and comments, ensuring that the data is retained even after a page reload.

## 🔨 Demo
Let's try [Here](https://code-timothy.github.io/todo-list-react/)!

## Features 👨🏼‍🏫

### 1. **Add New Tasks**
   - Users can add new tasks to the list.
   - Tasks will be saved automatically to the browser’s local storage.

### 2. **Delete Tasks**
   - Tasks can be removed from the list.
   - Once deleted, tasks are removed both from the user interface and local storage.

### 3. **Mark Tasks as Completed**
   - Users can mark tasks as completed, which visually differentiates them from active tasks.

### 4. **Toggle Visibility of Completed Tasks**
   - Users can hide completed tasks to focus on the remaining tasks.

### 5. **Edit Tasks**
   - Users can edit the content of existing tasks and save the changes.

### 6. **Sort Tasks Alphabetically**
   - Tasks can be sorted in alphabetical order by their content.

### 7. **Add Comments to Tasks**
   - Users can add comments to any task, allowing for more detailed tracking and notes.

### 8. **Remove Comments**
   - Comments can be deleted from a task.

### 9. **Persistent Data**
   - All tasks and comments are stored in local storage, ensuring they persist even if the page is reloaded.


## 👓 Preview

![gif how to use the app](/for_README/howtouse6.gif)

## 👩🏻‍💻 Technologies Used:
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/Redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=%23fff)
![Redux Saga](https://img.shields.io/badge/Redux_Saga-%2300BFFF.svg?style=for-the-badge&logo=redux&logoColor=%23fff)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-%230c4e44.svg?style=for-the-badge&logo=redux&logoColor=%23fff)
![JavaScript](https://img.shields.io/badge/JavaScript-%23f7df1e.svg?style=for-the-badge&logo=javascript&logoColor=%23000)
![CSS](https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=%23fff)
![Styled Components](https://img.shields.io/badge/Styled_Components-%23db7093.svg?style=for-the-badge&logo=styled-components&logoColor=%23fff)
![React Router](https://img.shields.io/badge/React_Router-%2305C7F2.svg?style=for-the-badge&logo=react-router&logoColor=%23fff)
![ES6](https://img.shields.io/badge/ES6-%23000000.svg?style=for-the-badge&logo=javascript&logoColor=%23fff)
![Markdown](https://img.shields.io/badge/Markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=%23fff)

- **HTML**: Markup language used for the structure of the application.
- **CSS**: Styling the application using techniques like:
  - **Grid**: Layout system for creating flexible and responsive grid-based designs.
  - **Flexbox**: Layout system for aligning and distributing space among items in a container.
  - **Media Queries**: To make the design responsive and adaptable to different screen sizes.
- **React**: A JavaScript library for building user interfaces.
  - **React Hooks**: For managing state and lifecycle in functional components.
  - **Custom Hooks**: For reusing stateful logic across components.
- **Redux**: State management library to manage the application’s state.
  - **Redux Toolkit**: A set of tools to simplify Redux logic and improve developer experience.
  - **Immer**: A library that makes working with immutable data easier by allowing you to work with mutable-like syntax.
- **Redux Saga**: Middleware for handling side effects in Redux (such as async operations).
- **JavaScript (ES6+)**: Modern JavaScript features like arrow functions, classes, destructuring, and async/await.
- **Styled-components**: A library for writing CSS in JavaScript to style components using tagged template literals.
- **Markdown**: A lightweight markup language used for writing documentation.
- **Create React App**: A boilerplate tool for setting up React applications with a modern build configuration.
- **React Icons**: A library for adding icons to the React app.
- **React Router**: A library for managing routing and navigation within the React application.

## 📌 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.