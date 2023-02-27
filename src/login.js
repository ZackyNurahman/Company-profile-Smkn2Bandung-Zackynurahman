import './lay.css'
import banner from './perusahaan.jpg';
import foto7 from './perta1.png'

const Login = () => {
    return ( 
        <div className="wrapper">
        <div className="prewiev-hero">
        <img src={banner} alt="" />
        </div>
        <div className="login-form form-hero">
          <div className="form-head">
            <span className="logo">
          <img src={foto7} />
            </span>
            <h1 className="login-title">LOGIN BRO</h1>
          </div>
          <form onsubmit="return false" className="form">
            <label className="input-hero" htmlFor="email">
              <input type="email" name="email" id="email" required />
              <span className="input-name"> Email </span>
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </label>
            <label className="input-hero password-input" htmlFor="password">
              <input type="password" name="password" id="password" required />
              <span className="input-name"> Password </span>
              <span className="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <a href="#" className="recovery-password"> Recovery password </a>
            </label>
            <label htmlFor="remember" className="checkbox-hero">
              <input type="checkbox" name="remember" id="remember" />
              <span className="checkbox-cover" />
              <span className="checkbox-name"> Remember Me </span>
            </label>
            <button type="submit" className="submit-btn btn"><a href="/">Login</a></button>
            <div className="form-bottom">
              Don't have account yet?
              <a href="/register"> REGISTER</a>
            </div>
          </form>
        </div>
      </div>
     );
}
 
export default Login;