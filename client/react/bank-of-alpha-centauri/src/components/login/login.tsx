import { useState } from "react";

import styles from "./login.module.scss";

const Login = () => {
  const [loginMode, setLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([])

  let loginOrOpenAccountText = loginMode ? "Open an Account" : "Login to Your Account";

  const toggleMode = () => {
    setErrors([]);
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

  const validate = () => {
    const newErrors: string[] = [];

    // Basic email regex (simple but works for most cases)
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.push('Invalid email address.');
    }

    if (password.length < 12) {
      newErrors.push('Password must be at least 12 characters.');
    }

    if (!/[A-Z]/.test(password)) {
      newErrors.push('Password must include at least one uppercase letter.');
    }

    if (!/[a-z]/.test(password)) {
      newErrors.push('Password must include at least one lowercase letter.');
    }

    if (!/[0-9]/.test(password)) {
      newErrors.push('Password must include at least one digit.');
    }

    if (!/[!@#$%^&*()?":{}|<>]/.test(password)) {
      newErrors.push('Password must include at least one of these special characters: !@#$%^&*()');
    }

    if (!loginMode && password !== confirmPassword) {
      newErrors.push('Passwords do not match.');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form is valid. Submitting:', { email, password });
      // Do submission here (API call, etc.)
    }
  };

  const errorsUI = errors.length > 0 && (
    <ul className={styles.errors}>
      {errors.map((err, idx) => <li key={idx}>{err}</li>)}
    </ul>
  );

  return (
    <div className={styles.contentContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email Address"  
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"  
        />
        { confirmPasswordUI }
        { errorsUI }

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