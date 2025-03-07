import './App.css';
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

function App() {
 
function Total() {
  // Deklarasi state arr sebagai array dengan nilai awal [1]
  const [arr, setArr] = useState([1]); // deklarasi dan inisialisasi, local scope

  function handleClick() {
    // Menambahkan nilai 1 ke array dengan menggunakan spread operator
    setArr([...arr, 1]); // memperbarui state arr dengan menambahkan 1 di akhir array
  }

  return (
    <div>
      <p>Total Length Array: {arr.length}</p>
      <button onClick={handleClick}>Tambah</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Total />);

}

export default App;
