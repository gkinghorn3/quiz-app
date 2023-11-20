
**Quiz Application**

This is a simple quiz application built with React that I use to revise the current module I am working on for my degree. In its current version, the app requires users to manually add the questions and answers by replacing "questions.js". The 
logic is set up to recognise that the first item in the .answers array is the correct answer. For an example of the expected input format, check the "questions.js file". The format can be fed into ChatGPT and prompted to return a list of questions with your chosen topic.   

**Features**

Presents a series of questions to the user.
Shuffles the answers for each question.
Tracks the user's answers and whether they are correct.
Shows a summary when the quiz is complete.
Installation
Clone this repository.
Run npm install to install the dependencies.
Run npm start to start the application.


**Usage**

The application presents a series of questions to the user. For each question, the user can select an answer or skip the question. If the user doesn't select an answer before the time runs out, the question is automatically skipped.

The user's answers are tracked and stored. When the quiz is complete, a summary is displayed.

**Components**

Quiz: The main component. It maintains the state of the user's answers and determines which question to display.
Question: Holds the Timer component & the Answers component. These two are grouped together since their render lifecycles should be in sync. 
Answers: Displays the shuffled answers for a question. It handles the logic for selecting an answer and determining its state (selected, correct, or wrong). When an answer is selected, it applies styles based on whether the answer is right or wrong. 
Timer: Shows the user how long they have to answer each question. The default is set to 10sec. Once an answer is selected to timer will be set to 2sec to show the user if their answer was right or wrong.

**Contributing**

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

**License**
MIT
