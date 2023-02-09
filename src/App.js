import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/ProfileDetails';
import RouterComponent from './components/Router';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:id" element={<RouterComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
