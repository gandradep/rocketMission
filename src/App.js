import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import RocketPage from './components/RocketsPage';
import MissionsPage from './components/MissionsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="dFlex">
          <Navbar />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<RocketPage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
