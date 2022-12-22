import React from 'react';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Modal from './components/Modal/Modal';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Modal />
    </div>
  );
}

export default App;
