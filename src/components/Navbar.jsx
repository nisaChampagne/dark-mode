import React from 'react';
import useDarkMode from '../Hooks/useDarkMode';

const Navbar = () => {
  const [dark, setDark] = useDarkMode(false);////my change
  const toggleMode = e => {
    e.preventDefault();
    setDark(!dark);////my change
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={dark ? 'toggle toggled' : 'toggle'}////my change
        />
      </div>
    </nav>
  );
};

export default Navbar;
