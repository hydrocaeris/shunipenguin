import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";

function App() {
 

  function Contoh() {
    const [message, setMessage] = useState('Mount'); // Deklarasi state message, global scope di dalam komponen
  
    // useEffect untuk mengupdate document.title setiap kali message berubah
    useEffect(() => {
      document.title = message;
    }, [message]); // dependency: message
  
    // Optional: useEffect untuk menangani unmount, update document.title saat komponen akan di-unmount
    useEffect(() => {
      return () => {
        document.title = "Unmount";
      };
    }, []);
  
    // Fungsi untuk mengubah message menjadi "Updated" saat tombol diklik
    const handleClick = () => {
      setMessage('Updated');
    };
  
    return (
      <div>
        <p>Message: {message}</p>
        <button onClick={handleClick}>Click</button>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Contoh />);
  
}

export default App;
