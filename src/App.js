import Header from "./Components/Header";
import UserList from "./Components/UserList";
import ToDoApp from "./Components/ToDoApp";
import { useState } from "react";

function App() {  
  const [isLoggedIn,setLoogedIn] = useState(true);
  const username = "nayan";
  const users = ["Rajesh","Pranav","Ankit"];
  const tooglebtn = () =>{
  setLoogedIn(!isLoggedIn);
 }
  return (
      <>
          <div className="d-flex flex-column justify-content-center align-items-center vh-100">
              <div className="card d-none" style={{ width: '30rem', border: '2px solid red' }}>
                  <div className="card-body">
                    <Header username = {username} isLoggedIn= {isLoggedIn} tooglebtn = {tooglebtn} />
                    {isLoggedIn && <UserList users={users} />}
                  </div>
              </div>
              <ToDoApp/>
          </div>
      </>
  )

}

export default App;