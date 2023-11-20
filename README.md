
Quiz Application
This is a simple quiz application built with React that I use for revising the current module I am working on for my Degree. In its current version the app requires that users add the questions and answers manually by replacing "questions.js". The 
logic is set up to recognise that the first item in the .answers array is the correct answer. An example of the expected question format can be found further down. 

Features
Presents a series of questions to the user.
Shuffles the answers for each question.
Tracks the user's answers and whether they are correct.
Shows a summary when the quiz is complete.
Installation
Clone this repository.
Run npm install to install the dependencies.
Run npm start to start the application.
Usage
The application presents a series of questions to the user. For each question, the user can select an answer or skip the question. If the user doesn't select an answer before the time runs out, the question is automatically skipped.

To upload your own questions, replace the "questions.js" file with the contents in the following format: 

export default [
    {
      id: 'q1',
      text: 'question 1 text',
      answers: [
        'possible answer 1',
        'possible answer 2',
        'possible answer 3',
        'possible answer 4',
      ],
    },
        {
      id: 'q2',
      text: 'question 2 text',
      answers: [
        'possible answer 1',
        'possible answer 2',
        'possible answer 3',
        'possible answer 4',
      ],
    }
  ];

The user's answers are tracked and stored. When the quiz is complete, a summary is displayed.

Components
Quiz: The main component. It maintains the state of the user's answers and determines which question to display.
Question: Displays a question and its answers. It also tracks the selected answer and whether it is correct.
Answers: Displays the shuffled answers for a question. It handles the logic for selecting an answer and determining its state (selected, correct, or wrong).
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT
