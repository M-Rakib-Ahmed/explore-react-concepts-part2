
import './App.css'
import Counter from './counter'
import Team from './team'

function App() {

  function handleClick(){
    alert('M Name is M Rakib Ahemd Rakib')
  }
  
  const handleClick2 = () =>{
    alert('hello wrold')
  }
  return (
    <>
     
      <h3>React Core Concepts 2</h3>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{alert('third click')}}>third</button>
     
    </>
  )
}

export default App
