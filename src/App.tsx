import './App.css'
import "./ToDoList.css";
import CarAPP from './Components/ClassComp/CarAPP';
import ToDoListFullyFunctionalHW from './Components/ToDoListFullyFunctionalHW';
import TicTacToe from './Components/TicTacToe';
import ToDoClass from './Components/ToDoClass/ToDoClass';
// import Profile, { getUserInfo as GetUserInfo, Greeting } from './Day1/day1Practice';
// import { ToDoList as ToDoList } from './Day1/toDoList';
// import ToDoList1 from './Day1/ToDoList1';
function App() {

  return (
    <div className="app">
      <div>Learning React</div>
      {/* <Profile/>
      <Profile/>
      <GetUserInfo/>
       <Greeting name="Vishesh" />
      <Greeting name="John" />
      <Greeting name="Alice" />
      <ToDoList/> */}
      <CarAPP/>
      <ToDoListFullyFunctionalHW/>
      <TicTacToe/>
      <ToDoClass/>
    </div>
  )
}

export default App
