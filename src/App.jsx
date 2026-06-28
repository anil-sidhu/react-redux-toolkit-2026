import { Link, Route, Routes } from "react-router"
import Home from "./pages/Home"
import AddUser from "./pages/AddUser"
import DisplayUser from "./pages/DisplayUser"

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/add" >Add User</Link></li>
        <li><Link to="/display">Display User</Link></li>

      </ul>
      <br />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/add" element={<AddUser />} />
        <Route  path="/display" element={<DisplayUser />} />

        </Routes>
    </div>
  )
}

export default App
