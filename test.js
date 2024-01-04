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