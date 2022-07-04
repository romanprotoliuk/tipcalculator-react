import './App.css';
import { useState } from 'react';

function App() {

  const [bill, setBill] = useState(50)
  const [tipPercentage, setTipPercentage] = useState(18)
  const [people, setPeople] = useState(1)

  const totalTip = (bill * tipPercentage) / 100
  const perPersonTip = totalTip / people


  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input
        id='bill'
        type='number'
        value={bill}
        min={0}
        onChange={(e) => setBill(parseInt(e.target.value))}
      />

      <label htmlFor="tip">Tip Percentage</label>
      <input
        id='tip'
        type='number'
        min="0"
        value={tipPercentage}
        onChange={(e) => setTipPercentage(parseInt(e.target.value))}
      />

      <label htmlFor="people">Number of People</label>
      <input
        id='people'
        type='number'
        min="1"
        value={people}
        onChange={(e) => setPeople(parseInt(e.target.value))}
      />
      <p>Total Tip: {isNaN(totalTip) ? '-' : `$${totalTip.toFixed(2)}`}</p>
      <p>Tip Per Person: {isNaN(perPersonTip) ? '-' : `$${perPersonTip.toFixed(2)}`}</p>
    </>
  );
}

export default App;
