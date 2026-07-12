import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Greeting from './Components/Greeting';
import Eventhandling from './Components/Eventhandling';
import Counter from './Components/Counter';
import ThemeToggle from './Components/ThemeSwitcher'; // Lagu saxay halkaan
import Clicker from './Components/Clicker';
import Inputer from './Components/Inputer';
import Dashboard from './Components/Dashboard';
import Notification from './Components/Notification'; // Lagu saxay halkaan

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeToggle />
      <Notification hasNewMessage={true} />
      <Greeting name="ikraan" surname="hussein" />
      <Dashboard isLoggedIn={true} />
      
      {/* Qaybta hoose oo si sax ah loo habeeyay */}
      <Clicker />
      <Inputer />
      <Header />
      <Eventhandling />
      <Counter />
    </>
  );
}

export default App;