import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
   const handleAdd = () =>{
    const newcount = count + 1
    setCount(newcount)
   }

   const handleReduce = () =>{
    const newCount = count - 1;
    setCount(newCount)
   }
    
    return (
        <div style={{border:'4px solid red '}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}