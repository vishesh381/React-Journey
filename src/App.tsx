import './App.css'
import Profile, { getUserInfo as GetUserInfo, Greeting } from './Day1/day1Practice';
import { ToDoList as ToDoList } from './Day1/toDoList';
function App() {

  return (
    <div className="app">
      <div>Learning React</div>
      <Profile/>
      <Profile/>
      <GetUserInfo/>
       <Greeting name="Vishesh" />
      <Greeting name="John" />
      <Greeting name="Alice" />
      <ToDoList/>
    </div>
  )
}

export default App
