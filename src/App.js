import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="dFlex">
          <Navbar />
        </header>
        <section>
          <Routes>
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
