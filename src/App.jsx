import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Modal from './components/Modal/Modal';
import UserPage from './pages/UserPage/UserPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Modal />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
