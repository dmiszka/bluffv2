import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Players from './Players';

const App: React.FC = () => {
  return (
    <Router>
      {/* <nav>
      <li>
      <Link to="/Players">Players</Link>
      </li>
      <li>
      <Link to="/Main">Main</Link>
      </li>
      </nav> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Players />} />
      </Routes>
    </Router>
  );
};

export default App;
