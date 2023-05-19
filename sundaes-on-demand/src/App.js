import './App.css';
import SummaryForm from './pages/summary/SummaryForm';
import Options from './pages/entry/Options';

function App() {
  return (
    <>
      <SummaryForm />
      <Options optionType='scoops' />
    </>
  );
}

export default App;
