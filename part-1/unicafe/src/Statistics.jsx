/* eslint-disable react/prop-types */
const Statistics = ({ text, value, unit }) => {
  return (
    <>
      <p>
        {text} {value} {unit}
      </p>
    </>
  );
};

export default Statistics;
