import './App.css'
import "./ToDoList.css";
import CarAPP from './Components/ClassComp/CarAPP';
import TicTacToe from './Components/TicTacToe';
import ToDoClass from './Components/ToDoClass/ToDoClass';
import ParentComp from './Components/PropsDemo/ParentComp';
// import Profile, { getUserInfo as GetUserInfo, Greeting } from './Day1/day1Practice';
// import { ToDoList as ToDoList } from './Day1/toDoList';
// import ToDoList1 from './Day1/ToDoList1';
import { TodoProvider } from "./context/TodoContext";
import ToDoListFunctionalWithContext from "./components/ToDoListFunctionalWithContext";
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
      {/* <CarAPP/>
      <ToDoListFullyFunctionalHW/>
      <TicTacToe/>
      <ToDoClass/> */}
      {/* <ParentComp/> */}
      <TodoProvider>
      <ToDoListFunctionalWithContext />
    </TodoProvider>
    </div>
  )
}

export default App
