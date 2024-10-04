import { useState } from "react"

export default function Counter() {

    const [count, setCount]=useState(0)

    const handleAdd=()=>{
        // can not mutable in initial data because this imutable
        // for example: count=count+1 
        // This is not possible to update
        
        const newCount=count+1;
        setCount(newCount)
    }

    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount)
    }
  return (
    <>
    <div style={{border:'2px solid red'}}>
        <h1>Counter:{count}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
    </div>

    </>
  )
}
