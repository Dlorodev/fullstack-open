import { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Statistics from './Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setAll(updatedGood + neutral + bad);
    setAverage(
      (updatedGood * 1 + neutral * 0 + bad * -1) / (updatedGood + neutral + bad)
    );
    setPositive(updatedGood / (updatedGood + neutral + bad) * 100);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setAll(good + updatedNeutral + bad);
    setAverage(
      (good * 1 + updatedNeutral * 0 + bad * -1) / (good + updatedNeutral + bad)
    );
    setPositive(good / (good + updatedNeutral + bad) * 100);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setAll(good + neutral + updatedBad);
    setAverage(
      (good * 1 + neutral * 0 + updatedBad * -1) / (good + neutral + updatedBad)
    );
    setPositive(good / (good + neutral + updatedBad) * 100);
  };

  return (
    <>
      <Header text="give feedback" />
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      <Header text="statistics" />
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={all} />
      <Statistics text="average" value={average} />
      <Statistics text="positive" value={positive} unit="%" />
    </>
  );
}

export default App;
