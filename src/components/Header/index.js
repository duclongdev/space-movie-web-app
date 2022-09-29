import React from 'react'
import useDarkMode from '../../hooks/useDarkMode';

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const test =()=>{
    toggleDarkMode(!isDarkMode);
  }
  return (
    <div>

      <button type="button" onClick={test} >Click Me!</button>
    </div>
  );
}

export default Header