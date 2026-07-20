# Blog App

## Overview

Blog App is a React application that demonstrates the React Component Lifecycle by fetching blog posts from an external API and displaying them using a class component.

## Objectives

- Understand React Class Components
- Implement `componentDidMount()` lifecycle method
- Implement `componentDidCatch()` error handling
- Fetch data using the Fetch API
- Display dynamic data using React state

## Technologies Used

- React
- JavaScript (ES6)
- HTML
- CSS
- Node.js
- npm

## Project Structure

```
blogapp
│── public/
│── src/
│   ├── App.js
│   ├── Post.js
│   ├── Posts.js
│   ├── index.js
│   └── App.css
│
├── package.json
├── package-lock.json
└── README.md
```

## Features

- Fetches blog posts from JSONPlaceholder API
- Displays post titles and descriptions
- Uses React Class Components
- Demonstrates `componentDidMount()`
- Demonstrates `componentDidCatch()`
- Uses component state to manage fetched data

## API Used

https://jsonplaceholder.typicode.com/posts

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd blogapp
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Open the browser and visit:

```
http://localhost:3000
```

## Sample Output

- Blog Posts
- Displays the title of each post as a heading
- Displays the body of each post as a paragraph
- Retrieves and displays 100 posts from the API


