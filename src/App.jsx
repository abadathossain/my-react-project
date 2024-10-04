
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {
  
const handleClick=()=>{
  alert('Click Me')
}

const addToFive=(num)=>{
  alert(num+5)
}
  return (
    <>

      <h1>Vite + React</h1>
      <Users></Users>
      <Counter></Counter>
     <button onClick={handleClick}>Click me</button>

     {/* Mind it function called did not follow of js */}
     <button onClick={()=>{addToFive(5)}}>Click me for Add</button>
    </>
  )
}

export default App
