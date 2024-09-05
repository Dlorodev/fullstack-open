/* eslint-disable react/prop-types */

const Statistics = ({ text, value, unit }) => {


  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
      <td>{unit}</td>
    </>
  );
};

export default Statistics;
