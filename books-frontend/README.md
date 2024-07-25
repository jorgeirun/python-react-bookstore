# React Book Viewer

This project is a React application that displays a list of books fetched from a FastAPI backend. It includes a `DataFetcher` component to handle data retrieval and displays book details in a list.

## Features

- Fetches book data from a FastAPI API.
- Displays a list of books with titles and cover images.
- Handles loading states and errors.

## Requirements

- Node.js
- React
- A running instance of the FastAPI backend

## Installation

1. **Clone the Repository**

   ```git clone https://github.com/jorgeirun/python-react-bookstore.git```
   ```cd python-react-bookstore```

2.	**Install Dependencies**
Ensure you are in the project root directory and run:
```npm install```


3.	**Prepare the Backend**
Make sure the FastAPI backend is running. You can follow the setup instructions in the FastAPI Book API README.

4.	**Run the Application**
Start the React development server:
```npm start```

## Components

App.js

The main component of the application. It:

	•	Uses useState to manage the state of books, loading, and errors.
	•	Provides a handleDataFetched function to update the state based on the fetched data.
	•	Renders the DataFetcher component, which is responsible for initiating the data fetch.
	•	Displays a loading message, error message, or the list of books based on the application state.

DataFetcher.js

A component responsible for fetching data from the FastAPI backend. You need to configure it to send requests to the FastAPI server.

Troubleshooting

	•	Loading Issues: Ensure that the FastAPI backend is running and accessible from http://localhost:8000.
	•	CORS Errors: Verify that CORS settings in the FastAPI backend allow requests from http://localhost:3000.

Acknowledgements

	•	React for the front-end framework.
	•	FastAPI for the backend API.
	•	Unsplash for book cover images.