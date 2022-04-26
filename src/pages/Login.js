import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({ password: '', email: '' });
  const [disable, setDisable] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const MIN_LENGTH = 6;
    const { password, email } = user;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmail = regexEmail.test(email);
    if (password.length > MIN_LENGTH && validateEmail) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  const handleChange = ({ target: { name, value } }) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    history.push('/foods');
  };

  return (
    <main>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          name="email"
          value={ user.email }
          onChange={ handleChange }
          data-testid="email-input"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          id="password"
          type="password"
          name="password"
          value={ user.password }
          onChange={ handleChange }
          data-testid="password-input"
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disable }
        onClick={ handleClick }
      >
        Enter
      </button>
    </main>
  );
}

export default Login;
