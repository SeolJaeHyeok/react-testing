import { useState } from 'react';
import './App.css';

function App() {
  const [buttonBGColor, setButtonBGColor] = useState('red');
  const newButtonColor = buttonBGColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        onClick={() => setButtonBGColor((bgColor) => (bgColor === 'red' ? 'blue' : 'red'))}
        style={{ backgroundColor: buttonBGColor }}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
