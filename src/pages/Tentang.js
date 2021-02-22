import { useState } from 'react';
function Tentang() {
  const [count, setCount] = useState(0);

  function tambah() {
    setCount(count+1)
  }
  
  function kurang() { 
    if (count > 0) {
      setCount(count-1)
    }
  }
  return (
    <div className="App">
    <h1>Tentang :{count}</h1>
    
    <button type="button" onClick={tambah} className="btn btn-primary">Primary</button>
    <button type="button" onClick={kurang} className="btn btn-secondary">Secondary</button>
    </div>
  );
  
}

export default Tentang;