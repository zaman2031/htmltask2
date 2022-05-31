import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Hope from './components/hope';
import Info from './components/info';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Profile />
       <Hope />
       <Info />
    </div>
  );
}

export default App;