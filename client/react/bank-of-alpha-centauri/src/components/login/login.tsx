import { useState } from "react";

import styles from "./login.module.scss";

const Login = () => {
  const [loginMode, setLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let loginOrOpenAccountText = loginMode ? "Open an Account" : "Login to Your Account";

  const toggleMode = () => {
    setLoginMode(prev => !prev);
  }

  let confirmPasswordUI = loginMode ? 
    null : 
    <input
      type="password"
      value={confirmPassword}
      onChange={e => setConfirmPassword(e.target.value)}
      placeholder="Confirm Password"  
    />;

  return (
    <div className={styles.contentContainer}>
      <form>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="User ID"  
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"  
        />
        { confirmPasswordUI }

        <button type="submit">Log In</button>
        <p>Forgot ID/Password?</p>
      </form>
      <div className={styles.openAccountContainer}>
        <p
          className={styles.openAccount}
          onClick={toggleMode}
        >{loginOrOpenAccountText}</p>
      </div>
    </div>
  );
}

export default Login;