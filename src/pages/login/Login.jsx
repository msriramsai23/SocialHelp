
import "./login.scss"
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>HELLO WORLD!</h1>
                    <p>
                        bxygxn 9ugbbvhinoxj 
                        gcduhc
                        wdcerbtr
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="password" />
                        <Link to='/'>
                        <button>Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )       
}

export default Login;