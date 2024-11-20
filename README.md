
# Popcorn App

A simple movie search application where you can search for movies, add them to your watched list, and rate them. The data is fetched from the OMDb API.

## Features

- Search for movies by title
- Add movies to your watched list
- Rate movies on a scale from 1 to 10
- Watched movies are saved in `localStorage` so the list persists across sessions
- Data fetched from OMDb API

## Getting Started

To run the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/pavlo1377/popcorn-app.git
cd popcorn-app
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Run the Application

To start the React app, run:

```bash
npm start
```

This will start the front-end application, and you can access it by visiting `http://localhost:3000` in your browser.

## How It Works

- **Search for movies**: You can search for movies by entering a title in the search bar. The app will fetch data from the OMDb API.
- **Watched list**: After finding a movie, you can add it to your watched list to keep track of what you've seen.
- **Rating**: You can rate movies on a scale of 1 to 10 to reflect your opinion on them.
- All movie data (including details and ratings) is fetched from the OMDb API.

## Technologies Used

- React
- OMDb API (for movie data)
- JavaScript
- CSS (for basic styling)

## Author

- **Pavlo Antokhiv** - GitHub: [@pavlo1377](https://github.com/pavlo1377)

