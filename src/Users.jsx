import { useEffect, useState } from "react"
import '../src/user.css'
import User from "./User";

export default function Users() {

    const [users, setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())

        // .then(data=>console.log(data))
        .then(data=>setUsers(data))
    },[])
  return (
    <div className="user-class">
<h1 >Users:{users.length}</h1>
{
  users.map(user=><User user={user} key={user.id}></User>)
}
    </div>
  )
}
