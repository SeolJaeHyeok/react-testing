import { useState } from 'react';
import './App.css';

export function replaceCamelCaseToSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonBGColor, setButtonBGColor] = useState('red');
  const [checked, setChecked] = useState(false);

  const newButtonColor = buttonBGColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        disabled={checked}
        onClick={() => setButtonBGColor(newButtonColor)}
        style={{ backgroundColor: checked ? 'gray' : buttonBGColor }}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor='disable-button'>Disable Button</label>
      <input
        id='disable-button'
        defaultChecked={checked}
        type='checkbox'
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
}

export default App;
