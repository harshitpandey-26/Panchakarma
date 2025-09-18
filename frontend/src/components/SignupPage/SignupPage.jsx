import "./SignupPage.scss";
import logo from "../../assets/icons/logo_2.png";

const SignupPage = () => {
  return (
    <section className="signup_container">
      <img src={logo} alt="logo" />
      <div className="login_form">
        <h1>Join AyurSutra</h1>
        <p>Begin your journey to wellness and balanced living</p>

        <form className="form">
          <p>Full Name</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your full name"
            className="input_box"
          />
          <p>Email Address</p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email id"
            className="input_box"
          />
          <p>Password</p>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
            className="input_box"
          />
          <p>I am a..</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Role"
            className="input_box"
          />

          <button type="submit" className="submit">
            Sign in
          </button>
          <p id="para">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
