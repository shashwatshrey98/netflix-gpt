# Netflix GPT

Netflix GPT is a web application that leverages the power of OpenAI's GPT API to provide personalized movie recommendations to users. The project utilizes React.js for the frontend, Firebase for authentication, Redux Toolkit for state management, and Tailwind CSS for styling. Additionally, it fetches movie data from the TMDB API to enhance the user experience.

## Features

- **Personalized Recommendations**: Utilizes OpenAI's GPT API to generate tailored movie recommendations based on user preferences.
- **Secure Authentication**: Firebase authentication ensures secure user sign-up and login functionalities.
- **Dynamic Movie Fetching**: Integrates with the TMDB API to fetch a vast array of movie data, including details, images.
- **User-Friendly Interface**: Built with React.js and styled with Tailwind CSS, the interface offers a seamless and visually appealing experience for users.
- **Efficient State Management**: Redux Toolkit is employed for efficient state management, ensuring smooth data flow throughout the application.
- Login/Sign Up
    - Sign In /Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N 
- NetflixGPT
    - Search Bar
    - Movie Suggestions
    - Memoization
    - Multi-language Feature

## Technologies Used

- **React.js**: A popular JavaScript library for building user interfaces.
- **Firebase**: A platform offering various backend services, including authentication, database, and hosting.
- **Redux Toolkit**: A state management library that simplifies the process of managing application state.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.
- **OpenAI GPT API**: Provides access to state-of-the-art natural language processing models for generating text-based recommendations.
- **TMDB API**: The Movie Database API provides a rich source of movie-related data, including details, images, and ratings.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up Firebase authentication and obtain API keys.
4. Obtain API keys for the TMDB API and OpenAI GPT API. Add .env file and add TMDB and OPENAI KEY into it.
5. Configure the project to use these API keys.
6. Run the application using `npm start`.

## Contributors

- Shashwat Shrey

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- OpenAI for providing the GPT API.
- TMDB for offering the comprehensive movie database API.
- Firebase for authentication services.
- Redux Toolkit for state management.

## Feedback and Support

If you have any feedback, suggestions, or issues, please feel free to open an issue on GitHub or reach out to [Your Email] for support. We appreciate your contributions and feedback!

Enjoy discovering personalized movie recommendations with Netflix GPT! 🎬🍿

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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
