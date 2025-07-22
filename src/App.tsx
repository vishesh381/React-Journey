import './App.css'
import Profile, { getUserInfo as GetUserInfo, Greeting } from './Day1/day1Practice';
function App() {

  return (
    <>
      <div>Learning React</div>
      <Profile/>
      <Profile/>
      <GetUserInfo/>
       <Greeting name="Vishesh" />
      <Greeting name="John" />
      <Greeting name="Alice" />
    </>
  )
}

export default App
