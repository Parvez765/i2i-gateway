
import React from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="App">
        
    </div>
  );
}

export default App;
