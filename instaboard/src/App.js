import './App.css';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header'
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const switchMode = () => {
    setIsDarkMode(mode => !mode);
  };

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} switchMode={switchMode} />
      <UserList isDarkMode={isDarkMode} switchMode={switchMode} />
    </div>
  );
}

export default App;