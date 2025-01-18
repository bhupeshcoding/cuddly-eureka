import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import StickyNotes from "./component/StickyNotes";
import Header from "./component/Header";
import Jobs from "./component/Jobs";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/sticky-notes" element={<StickyNotes />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
