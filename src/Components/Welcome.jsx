// 1.Functional Components vs Class Components
//🔹 Functional Component (modern way):

// function Welcome (){
//     return <h1>Welcome,Functionc User</h1>
// }

// export default Welcome;

// 🔹 Class Component (older way):
// import React from "react";
// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello,Class User </h1>;
//     }
// }

// export default Welcome;

//2. Props 
// 🔹 Props (short for “properties”) 

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

// export default Welcome;

//3. useState Hook
// import { useState } from "react";

// function Welcome() {
//     let [count, setCount] = useState(0);
//     return (
//         <>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)} type="button" className ="btn btn-danger me-2">count</button>
//             <button onClick={() => setCount(count = 0)} className ="btn btn-danger">reset</button>
//         </>
//     )

// }

// export default Welcome;

//4. Event Handling in React
// function Welcome() {
//     function handleClick() {
//         alert('Button clicked!');
//     } 
//     return (
//         <>
//             <button onClick={handleClick} type="button" className ="btn btn-danger me-2">click me</button>
//         </>
//     )

// }

// export default Welcome;

//5. Conditional Rendering

// function Welcome() {
//     const isLoggedIn = false;
//         if (isLoggedIn) {
//             return <h1>Welcome to Dashboard</h1>;
//           } else {
//             return <h1>Welcome to Login</h1>;
//         }
          
// }

// export default Welcome;

//6. Lists and Keys

function Welcome() {
    const users = ['Alice', 'Bob', 'Charlie'];
        return (
            <ul>
                {users.map((user,index)=>(
                    <li key={index}>{`Welcome ${user}`}</li>
                ))}
            </ul>
        )          
}

export default Welcome;





