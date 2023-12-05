import { Link } from "react-router-dom"
import '../styles/login.css'

const login = () => {
  return (
    <form>
        <h1 class="title">Log In</h1>
        <label>
            <i class="fa-solid fa-user"></i>
            <input placeholder="username" type="text" id="username"/>
        </label>
        <label>
            <i class="fa-solid fa-lock"></i>
            <input placeholder="password" type="password" id="password"/>
        </label>
        <a href="#" class="link">Forgot your password?</a>

        <button id="button">Login</button>

    </form>
  )
}

export default login