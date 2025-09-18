import "./Login.scss";
import logo from "../../assets/icons/logo_2.png";
import side from "../../assets/images/side_design_2.png";
const Login = () => {
  return (
    <section className="login_container">
        <img src={logo} alt="logo" />
        <div className="login_form">
            <h1>Welcome Back</h1>
            <p>Continue your wellness journey with AyurSutra</p>

            <form className="form">
                <p>Email Address</p>
                <input type="email" name="" id="" placeholder="Enter your email id" className="input_box" />
                <p>Password</p>
                <input type="password" name="" id="" placeholder="Enter your password" className="input_box"/>

                <button type="submit" className="submit">Log in</button>
                <p id="para">Don't have an account? <a href="/signup">Create one here</a></p>
            </form>
        </div>
        
    </section>
  )
}

export default Login;