import React, { useState } from "react";
import "./App.css";


const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 8);
    setConfirmPasswordValid(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: emailValid ? 'green' : 'red' }}
        />
      {!emailValid && email.trim() !== '' && <p style={{ color: 'red' }}>Invalid email address</p>}

     <br/>
  
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: passwordValid ? 'green' : 'red' }}
        />
        {!passwordValid && <p style={{ color: 'red' }}>Password must be at least 8 characters long</p>}
     
  
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: confirmPasswordValid ? 'green' : 'red' }}
        />
        {!confirmPasswordValid && <p style={{ color: 'red' }}>Passwords do not match</p>}
     
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
