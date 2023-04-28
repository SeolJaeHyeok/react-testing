import { useState } from 'react';
import './App.css';

function App() {
  const [buttonBGColor, setButtonBGColor] = useState('red');
  const [checked, setChecked] = useState(false);

  const newButtonColor = buttonBGColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        disabled={checked}
        onClick={() => setButtonBGColor((bgColor) => (bgColor === 'red' ? 'blue' : 'red'))}
        style={{ backgroundColor: buttonBGColor }}
      >
        Change to {newButtonColor}
      </button>
      <input type='checkbox' onChange={(e) => setChecked(e.target.checked)} />
    </div>
  );
}

export default App;
