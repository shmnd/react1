/////////////////////////////////////////////////////////////////// ARROW FUNCTION

// let k= ()=>{
//     console.log('hello world')
// }

// k()


// let mul=(x,y)=>{
//     console.log(x*y)
// }

// mul(5,7)



/////////////////////////////////////////////////////// NORMAL FUNCTION


// function a(){
//     console.log('hello world')
// }

// a()

//////////////////////////////////////////////////////////  MAP

// const num=[1,2,3,4,5]
// const sqr=num.map((num)=>num * num)

// console.log(sqr)



// const apple =[1,3,4,6,7]

// const sum= apple.map((apple)=> apple + apple)

// console.log(sum)

//////////////////////////////////////////////////// FILTER


// num=[42,32,46,34,74,53,73]

// console.log(num.filter(num=>num%2===0))

////////////////   OR

// num=[42,32,46,34,74,53,73]

// const res=num.filter(num=> num %2===0)

// console.log(res)


//////////////////////////////////////////////////// REDUCE

// const num=[1,2,3,4,5]

// const res=num.reduce((a,b)=>a*b)

// console.log(res)


//////////////////////////////////////////////////// DESTRUCTURING

// const per={
//     name:'shamnad',
//     age:23,
//     gender:'male'

// }

// let {age,name,gender='unknown',palce='manjeri'}=per

// console.log(age,name,gender,palce)

//////////////////////////////////////////////////// SPREDING

            // TO FIND MAXIMUM VALUE

// const num=[1,2,3,4,5]
 
// const res=Math.max(...num)

// console.log(res)


            // TO FIND MINIMUM VALUE

// const num=[1,2,3,4,5]
// const res=Math.min(...num)

// console.log(res)


//////////////////////////////////////////////////// CLASS COMPONENT AND FUNCTIONAL COMPONENTS

// 1. Syntax:


///////////////// CLASS COMPONENT

// import React, { Component } from 'react'

// export default class test extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hi World</h1>
//       </div>
//     )
//   }
// }


// ///////////////// FUNCTIONAL COMPONENTS

// import React from 'react'

// function test() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// export default test



// 2. State and Lifecycle:

// Class Components:

    // Can have local state managed by this.state.
    // Have access to lifecycle methods (e.g., componentDidMount, componentDidUpdate, etc.).

// Functional Components:

    // Before React 16.8, functional components didn't have state or lifecycle methods.
    // With the introduction of Hooks in React 16.8, functional components can use state and lifecycle features through hooks like useState and useEffect.

// 3. Readability and Conciseness:

    // Class Components:

        // Require more boilerplate code.
        // Can be more verbose.

    // Functional Components:

        // Typically more concise and easier to read.
        // Especially true with the introduction of Hooks, which simplifies state management and lifecycle-like features.

// 4. Use of this:

    // Class Components:

        // Use this to access and modify the component's state and props.

    // Functional Components:

        // Don't use this and access props directly as function arguments.
        // State is managed using the useState hook, and this is not needed.

// 5. Use Cases:

    // Class Components:

        // Used in older codebases or projects that haven't adopted Hooks.
        // Still commonly used when complex state management or lifecycle methods are needed.

    // Functional Components:

        // Preferred for new development, especially with the introduction of Hooks.
        // Easier to reason about, write, and test.



        /////////////////////////////////////////////// Example (Functional Component with Hooks):

        // import React, { useState, useEffect } from 'react';

        // const FunctionalComponent = () => {
        //   const [count, setCount] = useState(0);

        //   useEffect(() => {
        //     document.title = `Count: ${count}`;
        //   }, [count]);

        //   return (
        //     <div>
        //       <p>Count: {count}</p>
        //       <button onClick={() => setCount(count + 1)}>Increment</button>
        //     </div>
        //   );
        // };

// This functional component uses the useState hook to manage state and the useEffect hook to perform side effects when the component mounts or when the count state changes.
//  The equivalent class component would be more verbose.



   /////////////////////////////////////////////// Dynamic rendering



   /////////////////////////////////////////////// HOOKS


//    a. useState:
//         useState is a hook that allows functional components to manage local state. It returns an array with two elements: the current state value and a function to update that value.

// Example:
// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };



// b. useEffect:
// useEffect is a hook used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It's similar to lifecycle methods in class components.


// import React, { useEffect, useState } from 'react';

// const DataFetchingComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from an API
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div>
//       <ul>
//         {data.map(item => <li key={item.id}>{item.name}</li>)}
//       </ul>
//     </div>
//   );
// };


// c. useRef:
// useRef creates a mutable object with a current property that can hold a mutable value. It's often used to persist values across renders without causing re-renders.


// import React, { useRef } from 'react';

// const TextInputWithFocusButton = () => {
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus on Input</button>
//     </div>
//   );
// };


// d. useHistory:
// useHistory is not a built-in hook in React. Instead, it's commonly associated with React Router for navigating between different components or pages in a single-page application.

// import { useHistory } from 'react-router-dom';

// const MyComponent = () => {
//   const history = useHistory();

//   const redirectToHomePage = () => {
//     history.push('/');
//   };

//   return (
//     <div>
//       <button onClick={redirectToHomePage}>Go to Home Page</button>
//     </div>
//   );
// };

// e. useCallback:
// useCallback is a hook that memoizes a callback function, preventing it from being recreated on every render. It's useful to optimize performance in scenarios where the callback is passed to child components and can lead to unnecessary re-renders.


// import React, { useCallback, useState } from 'react';

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <ChildComponent increment={increment} />
//     </div>
//   );
// };

// const ChildComponent = ({ increment }) => {
//   return (
//     <div>
//       <button onClick={increment}>Increment Count</button>
//     </div>
//   );
// };


// f. useMemo:
// useMemo is a hook that memoizes the result of a function and reuses the result if the inputs to the function haven't changed. It's helpful for optimizing expensive calculations or preventing unnecessary re-renders.


// import React, { useMemo } from 'react';

// const ExpensiveComponent = ({ data }) => {
//   const processedData = useMemo(() => {
//     // Perform some expensive calculation based on data
//     return data.map(item => item * 2);
//   }, [data]);

//   return (
//     <div>
//       {processedData.map(result => <p key={result}>{result}</p>)}
//     </div>
//   );
// };


/////////////////////////////////////////////// Learn the concept of event handlers


// Event handlers in React are functions that are executed in response to specific events, such as user interactions with the UI. Two commonly used event handlers are onClick and onChange. Let's explore each of them:


// a. onClick
// b. onChange


// a. onClick:
// The onClick event handler is used to handle click events on HTML elements, such as buttons, links, or any other interactive elements. When the element is clicked, the associated function is executed.

// import React from 'react';

// const ClickHandlerExample = () => {
//   // Event handler function for click
//   const handleClick = () => {
//     alert('Button Clicked!');
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default ClickHandlerExample;

// In this example, when the button is clicked, the handleClick function is called, displaying an alert.


// b. onChange:
// The onChange event handler is used to handle changes in the value of form elements, such as input fields or select boxes. It is often used to capture user input.

// import React, { useState } from 'react';

// const InputChangeHandlerExample = () => {
//   // State to hold the input value
//   const [inputValue, setInputValue] = useState('');

//   // Event handler function for input change
//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <label>Enter text: </label>
//       <input type="text" value={inputValue} onChange={handleChange} />
//       <p>You entered: {inputValue}</p>
//     </div>
//   );
// };

// export default InputChangeHandlerExample;

// In this example, the handleChange function is called whenever the input value changes. The input value is stored in the component's state (inputValue) and displayed below the input field.

// Both onClick and onChange are essential for handling user interactions in React applications. They enable developers to respond to events and create interactive and dynamic user interfaces. These event handlers are used extensively when building forms, handling button clicks, and managing user input.



//////////////////////////////////////   React router


// React Router is a routing library for React that allows you to define multiple routes in your application and handle navigation between them.
//  It is a popular choice for building single-page applications (SPAs), which are web applications that load a single HTML page and dynamically update that page as the user interacts with it.
// React Router uses a declarative approach to routing, which means that you define your routes in code and React Router takes care of keeping the UI in sync with the URL. This makes it easy to create complex routing schemes without having to worry about the details of managing the history stack.
// One of the key features of React Router is its support for nested routes. This allows you to create complex routing hierarchies that reflect the structure of your application. For example, you might have a route for a product catalog that contains nested routes for each product category



/////////////////////////Learn the different types of state management concepts
            // a. Props (normal method )
            // b. Context API
            // c. Redux



// State management is a crucial aspect of developing React applications. There are several methods and tools available for managing state. Here are three common approaches:

// a. Props (Normal Method):
// In React, the most straightforward way to manage state is by passing data down the component tree using props. A parent component can pass data to its child components through props, allowing child components to access and display that data.

// Parent Component
// import React, { useState } from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//   const [message, setMessage] = useState('Hello from Parent');

//   return (
//     <div>
//       <ChildComponent message={message} />
//     </div>
//   );
// };

// // Child Component
// import React from 'react';

// const ChildComponent = ({ message }) => {
//   return (
//     <div>
//       <p>{message}</p>
//     </div>
//   );
// };


// In this example, the ParentComponent maintains the state (message) and passes it down to the ChildComponent through the message prop.


// b. Context API:
// The Context API is a feature in React that provides a way to share values (like state) between components without explicitly passing props through the entire component tree. It allows you to create a context, set its provider, and consume the context in any component within its tree.

// Create a context
// import React, { createContext, useContext, useState } from 'react';

// const MyContext = createContext();

// // Parent Component
// const ParentComponent = () => {
//   const [message, setMessage] = useState('Hello from Context');

//   return (
//     <MyContext.Provider value={message}>
//       <ChildComponent />
//     </MyContext.Provider>
//   );
// };

// // Child Component
// const ChildComponent = () => {
//   const message = useContext(MyContext);

//   return (
//     <div>
//       <p>{message}</p>
//     </div>
//   );
// };

// In this example, the ParentComponent provides the message value using MyContext.Provider, and the ChildComponent consumes it using the useContext hook.

// c. Redux:
// Redux is a powerful state management library that can be used with React. It provides a global state that can be accessed and modified by any component in the application. Redux follows a unidirectional data flow, and the state is modified using actions and reducers

// Redux Setup (store, actions, and reducer)
// import { createStore } from 'redux';

// // Action types
// const SET_MESSAGE = 'SET_MESSAGE';

// // Action creators
// const setMessage = (message) => ({
//   type: SET_MESSAGE,
//   payload: message,
// });

// // Reducer
// const reducer = (state = { message: '' }, action) => {
//   switch (action.type) {
//     case SET_MESSAGE:
//       return { ...state, message: action.payload };
//     default:
//       return state;
//   }
// };

// // Create the Redux store
// const store = createStore(reducer);

// // React Component using Redux
// import React from 'react';
// import { connect } from 'react-redux';

// const ReduxComponent = ({ message, setMessage }) => {
//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={() => setMessage('Hello from Redux')}>Change Message</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   message: state.message,
// });

// const mapDispatchToProps = {
//   setMessage,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);


// In this example, the ReduxComponent is connected to the Redux store using the connect function from the react-redux library. The component can access and modify the global state using the provided props.

// Each of these state management concepts has its use cases, and the choice depends on the complexity and requirements of your application. Props are suitable for simple scenarios, the Context API is useful for medium-sized applications, and Redux is recommended for large and complex applications with extensive state management needs.

