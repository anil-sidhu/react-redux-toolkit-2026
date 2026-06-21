import { useDispatch } from "react-redux"
import {increment} from './redux/slice'
import UserList from "./UserList"

function App() {

  const dispatch= useDispatch()
  return (
    <div>
      <UserList />
      <h1>Hello Redux toolkit</h1>
      <button onClick={()=> dispatch(increment())} >Increment</button>
    </div>
  )
}

export default App
