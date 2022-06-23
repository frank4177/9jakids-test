import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/home/home'
import SearchResult from './pages/search result/SearchResult';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/search/:keyword" element={<SearchResult />} />
      <Route path="/search/" element={<SearchResult />} />

    </Routes>
  </Router>
  );
}

export default App;
