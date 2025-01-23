export const quizQuestions = [
  {
    id: 1,
    question:
      "When using the useState hook, which approach is correct for updating state that depends on the previous value?",
    options: [
      "setCount(count + 1)",
      "setCount(prevCount => prevCount + 1)",
      "setCount(current + 1)",
      "setCount(state => state + count)",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "What's happening in this code: const [user, setUser] = useState({ name: '', age: 0 })?",
    options: [
      "Creating a global user variable",
      "Array destructuring of useState's returned array, giving us the state value and setter function",
      "Creating two separate states for name and age",
      "Declaring a constant that can't be changed",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question:
      "What will happen if you directly modify state like this: user.name = 'John'?",
    options: [
      "The component will re-render with the new name",
      "React will throw an error",
      "The state will change but the component won't re-render",
      "React will automatically create a new state object",
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "How do you handle form input state correctly in React?",
    options: [
      "Use document.getElementById to get input values",
      "Create a ref for each input",
      "Use controlled components with onChange handlers and value props",
      "Store input values in variables outside the component",
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question:
      "What's the correct way to update an object in state while preserving other properties?",
    options: [
      "setUser({ name: 'John' })",
      "setUser({ ...prevUser, name: 'John' })",
      "user.name = 'John'",
      "setUser(user.name = 'John')",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question:
      "What's wrong with this code: useEffect(() => { setCount(count + 1) })?",
    options: [
      "Nothing, it's correct",
      "Missing dependency array, might cause infinite loop",
      "useEffect can't update state",
      "Should use async/await",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question:
      "How do you pass data from a child component to a parent component?",
    options: [
      "Use React.context",
      "Pass a callback function as prop to child component",
      "Directly modify parent's state from child",
      "Use global variables",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question:
      "What happens when you pass a function to useState's initial value: useState(() => expensiveOperation())?",
    options: [
      "The function runs on every render",
      "The function only runs once during initial render",
      "React throws an error",
      "The function runs whenever state updates",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question:
      "What's the purpose of the key prop when rendering lists in React?",
    options: [
      "It's required syntax for lists",
      "It helps React identify which items have changed, been added, or removed",
      "It's used for styling list items",
      "It defines the order of list items",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "What's the difference between props and state?",
    options: [
      "Props are internal, state is external",
      "Props can be changed, state is immutable",
      "Props are passed from parent components and are read-only, state is managed internally and can be updated",
      "They are different names for the same concept",
    ],
    correctAnswer: 2,
  },
];
