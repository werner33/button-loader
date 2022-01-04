
import {useEffect, useState} from 'react';

import Button from './Button';

import './App.css';

function App() {

  const [catFact, setCatFact] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCatFact()
  }, []);

  const getCatFact = () => {
    setLoading(true);
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(result => {
      setCatFact(result.fact);
      setLoading(false);
    });  
  }
 
  return (
    <div className="App">
      <div className="catFact">{catFact}</div>
      <Button text='Get Cat Fact' action={getCatFact} loading={loading} />
    </div>
  );
}

export default App;
