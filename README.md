# Full Stack coding challenge

## Challenge:

You are tasked with building a web application that allows users to retrieve images from [https://placekeanu.com/ based](https://placekeanu.com/) on their preferred dimensions, whether the image should be grayscale, and whether it should be of a young Keanu Reeves. You will need to use React on the front-end and a Docker containerized backend that uses Apollo Server to handle the API requests.

## Requirements:
#### Build a Docker containerized backend that uses Apollo Server to handle requests from the front-end. The backend should have the following features.

- [x] Retrieve images from [https://placekeanu.com/ based](https://placekeanu.com/) on user input.
- [x] Handle requests from the front-end with the following input parameters: image width, image height, option for young Keanu, and option for grayscale.
- [x] Use TypeScript for the backend.

Create a React app that has the following features:
- [x] Use TypeScript for the front-end.
- [x] Use Redux Sagas to handle requests to the backend.
- [x] Display a form that allows the user to input the image width, image height, and the options for young Keanu and grayscale (Include input validation)
- [x] When the form is submitted, retrieve the image from the backend and display it on the screen.

## Deliverables:

- A working React app with a Docker containerized Apollo Server backend.
- Source code and build instructions.
- A README file that explains how to run the application.

## Evaluation Criteria:

- Correct implementation of the Docker containerized Apollo Server backend.
- Correct implementation of the React app using TypeScript and Redux Sagas.
- Ability to handle API requests and display images based on user inputs.
- Code quality and adherence to best practices.

## Bonus Points:

- [x] Implement caching to improve performance.
- [x] Use CSS to improve the styling and user experience.
- [x] Implement error handling and display error messages to the user.

## How to run the project
1. Clone the repository [git@github.com:havalos97/fullstack-interview.git](git@github.com:havalos97/fullstack-interview.git).
2. `cd` into the repo folder. Example: `$ cd fullstack-interview/`
3. Setup the env of the frontend folder with the following command: `$ cp ./frontend/env-example ./frontend/.env `
4. Setup the env of the server folder with the following command: `$ cp ./server/env-example ./server/.env `
5. Run the following command to build the containers: `$ docker-compose build`
6. Once the build script has finished, raise the containers by running `$ docker-compose up`
7. Go to http://localhost:3000 to access the Frontend page
8. Go to http://localhost:3001 to access the Apollo GraphQL server
9. Make sure the React frontend page works as expected by filling out the form and clicking in the *FETCH KEANU IMAGE!* button.