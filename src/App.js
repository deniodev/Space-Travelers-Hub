import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Mission from './components/pages/Mission';
import Rockets from './components/pages/Rocket';
import Profile from './components/pages/Profile';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
);

export default App;
