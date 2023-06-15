# Assignment_backend_server

# Frontend Live-link: https://quiz-assignment-frontend.vercel.app/
# Frontend Repo: https://github.com/rastogiyash29/Quiz_Assignment_Frontend

# index router is 'quizzes/' and API end points are 

## It will create quizes
### router.post('/',quizController.addQuiz);

## It will return only active quizzes
### router.get('/active',quizController.getActiveQuizes);

## It will return all quizes whose results can be seen
### router.get('/all',quizController.getEndedQuizes);   

## It will return single quiz whose id will match as in params
### router.get('/:id/result',quizController.getQuizById);    


## This repository contains a Node.js application. Follow the steps below to get started:

Clone the repository: git clone https://github.com/rastogiyash29/Quiz_Assignment_Backend.git
Navigate to the project directory: cd server
Install the dependencies: npm install
Start the application: npm start
Access the app in your browser at http://localhost:3000
That's it! You now have the Node.js app up and running locally. Feel free to explore and modify the code as needed.
