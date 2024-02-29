import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Players from './Players';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/" element={<Players />} />
      </Routes>
    </Router>
  );
};

export default App;
