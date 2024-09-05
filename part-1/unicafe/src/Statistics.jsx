/* eslint-disable react/prop-types */
import StatisticLine from './StatisticLine';

const Total = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={all} />
          </tr>
          <tr>
            <StatisticLine text="average" value={average} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={positive} unit="%" />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Total;
