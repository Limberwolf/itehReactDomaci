import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import PretragaPage from './components/PretragaPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/search" element={<PretragaPage />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
