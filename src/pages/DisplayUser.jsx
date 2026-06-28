import { useDispatch, useSelector } from "react-redux"
import {increment} from '../redux/slice'
import UserList from "../UserList"
import Input from "../components/Input"

function DisplayUser() {
const data = useSelector((state)=>state.counter.user);
console.log(data);

  return (
    <div>
        <h1>Display User Page</h1>
        <ul>
            <li>
                <span>Name:{data.name}</span>
            </li>
            <li>
                <span>Email:{data.email}</span>
            </li>
        </ul>
    </div>
  )
}

export default DisplayUser
