import { userService } from "../services/user.service";
import { useNavigate } from "react-router-dom";

function Login (){
    const navigate = useNavigate();
    setTimeout(() => {
        userService.login()
        console.log('logged in');
        navigate('/code')
    }, 3000);

        return (
            <div className="login-page">
                <div className="login-container">
                        <h1>Log in to your account</h1>
                        <form className="login-form">
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button>Log in</button>
                        </form>
                </div>
            </div>
        );
}

export default Login;