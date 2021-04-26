import { useState, useEffect } from 'react'
import Todos from "./components/Todos"

function App() {
  const initialMode = () => JSON.parse(localStorage.getItem("mode")) || false
  const [darkMode, setDarkMode] = useState(initialMode)
  const handleButtonClick = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={`${darkMode ? "bg-dark text-white" : "bg-light"} min-vh-100`}>
      <div className="container">
        <button onClick={handleButtonClick}>Dark Mode</button>
        <h1 className="text-center">ToDos App</h1>
        <Todos darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
