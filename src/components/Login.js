import "./login.css";
import instaLogo from "../imgs/logo.png";
import fbLogo from "../imgs/fbLogo.png";
import appStore from "../imgs/appStore.png";
import playStore from "../imgs/googlePlay.png";
import phone from "../imgs/img-1.png";
import Signup from "./Signup";

function Login() {
  return (
    <div>
      <main>
        <div className="login__container">
          <div className="login">
            <img className="logo" src={instaLogo} alt="instaLogo" />
            <div className="login__form">
              <input type="text" placeholder="username or email" />
              <input type="password" placeholder="password" />
              <button className="login__button">Log in</button>
            </div>
            <span className="or__div">OR</span>
            <div className="fb__login">
              <a href="/">
                <img src={fbLogo} alt="fbLogo" />
              </a>
              <span>Log in with Facebook</span>
            </div>
            <a className="forgot__pass" href="/">
              Forgot password?
            </a>
          </div>
          <Signup />
          <div className="get__app">
            <span>Get the app.</span>
            <div className="app__img">
              <a href="/">
                <img src={appStore} alt="app_store" />
              </a>
              <a href="/">
                <img src={playStore} alt="play_store" />
              </a>
            </div>
          </div>
        </div>
        <div className="phone__container">
          <img style={{ width: "30rem" }} src={phone} alt="phone!" />
        </div>
      </main>
      <footer>
        <ul className="footer__linkes">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Impressum</a>
          </li>
          <li>
            <a href="/">Top</a>
          </li>
          <li>
            <a href="/">Hashtags</a>
          </li>
          <li>
            <a href="/">Location</a>
          </li>
          <li>
            <a href="/">Beauty</a>
          </li>
          <li>
            <a href="/">Music</a>
          </li>
        </ul>
        <span className="copyright">&copy; Instagram-clone 2021</span>
      </footer>
    </div>
  );
}

export default Login;
