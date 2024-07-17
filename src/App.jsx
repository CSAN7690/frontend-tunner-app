import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>

          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
