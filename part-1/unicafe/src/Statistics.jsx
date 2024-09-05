/* eslint-disable react/prop-types */
import StatisticLine from './StatisticLine';

const Total = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} unit="%" />
    </>
  );
};

export default Total;
