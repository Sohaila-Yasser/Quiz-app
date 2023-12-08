export const quizDetailes = {
  totalQuestionNumber: 10,
  eachQuestionScore: 2,

  questions: [
    {
      question: "React is mainly used for building ___.",
      questionNumber: 1,
      answers: [
        "Database",
        "Connectivity",
        "User interface",
        "Design Platform",
      ],
      correctAnswer: "User interface",
    },
    {
      question: "The lifecycle methods are mainly used for ___.",
      questionNumber: 2,
      answers: [
        "keeping track of event history",
        "enhancing components",
        "freeing up resources",
        "none of the above",
      ],
      correctAnswer: "enhancing components",
    },
    {
      question:
        "___ can be done while multiple elements need to be returned from a component.",
      questionNumber: 3,
      answers: ["Abstraction", "Packing", "Insulation", "Wrapping"],
      correctAnswer: "Abstraction",
    },
    {
      question:
        "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
      questionNumber: 4,
      answers: [
        "<h1>{fetch()}</h1>",
        "<h1>${fetch()}</h1>",
        "<h1>{fetch}</h1>",
        "<h1>${fetch}</h1>",
      ],
      correctAnswer: "<h1>{fetch()}</h1>",
    },
    {
      question:
        "Which of the following methods in a React Component should be overridden to stop the component from updating?",
      questionNumber: 5,
      answers: [
        "willComponentUpdate",
        "shouldComponentUpdate",
        "componentDidUpdate",
        "componentDidMount",
      ],
      correctAnswer: "shouldComponentUpdate",
    },
    {
      question: "What is used to pass data to a component from outside?",
      questionNumber: 6,
      answers: ["setState", "render with arguments", "PropTypes", "props"],
      correctAnswer: "props",
    },
    {
      question:
        "Which of the following methods in a React Component is called after the component is rendered for the first time?",
      questionNumber: 7,
      answers: [
        "componentDidUpdate",
        "componentDidMount",
        "componentMounted",
        "componentUpdated",
      ],
      correctAnswer: "componentDidMount",
    },
    {
      question:
        "Which of the following is the correct syntax for a button click event handler foo?",
      questionNumber: 8,
      answers: [
        "<button onclick={this.foo()}>",
        "<button onclick={this.foo}>",
        "<button onClick={this.foo()}>",
        "<button onClick={this.foo}>",
      ],
      correctAnswer: "<button onClick={this.foo}>",
    },
    {
      question:
        "What will happen if you call setState() inside render() method?",
      questionNumber: 9,
      answers: [
        "Repetitive output appears on the screen",
        "Duplicate key error",
        "Stack overflow error",
        "Nothing happens",
      ],
      correctAnswer: "Stack overflow error",
    },
    {
      question: "The arbitrary inputs of components are called ___.",
      questionNumber: 10,
      answers: ["Keys", "Props", "Elements", "Ref"],
      correctAnswer: "Props",
    },
  ],
};
