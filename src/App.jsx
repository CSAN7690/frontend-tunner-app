import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import New from "./pages/New"

// BONUS
import FourOFour from "./pages/FourOFour"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App
