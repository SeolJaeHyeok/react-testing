import { useRef } from 'react';
import './App.css';

function App() {
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    buttonRef.current.backgroundColor = 'blue';
    buttonRef.current.textContent = 'Change to Red';
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleButtonClick} style={{ backgroundColor: 'red' }}>
        Change to Blue
      </button>
    </div>
  );
}

export default App;
