import react, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Players from './Players';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Players />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
