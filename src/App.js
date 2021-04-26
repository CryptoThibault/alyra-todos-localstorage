import { useState, useEffect } from 'react'
import Todos from "./components/Todos"

function App() {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.mode))
  const handleButtonClick = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light"}>
      <div className="container">
        <button onClick={handleButtonClick}>Dark Mode</button>
        <h1 className="text-center">ToDos App</h1>
        <Todos />
      </div>
    </div>
  )
}

export default App
