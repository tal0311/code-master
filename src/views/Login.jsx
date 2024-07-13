
import { userService } from "../services/user.service";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();


    const doLogin = async (ev) => {
        const credentials = Object.fromEntries(new FormData(ev.target))

        ev.preventDefault();
        // debugger
        const isLoggedIn = await userService.login(credentials)
        isLoggedIn && navigate('/code')
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Log in to your account</h1>
                <form className="login-form" onSubmit={doLogin}>
                    <input type="text" name="username" defaultValue='user1' placeholder="Username" />
                    <input type="password" name="password" defaultValue='1' placeholder="Password" />
                    <button>Log in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;