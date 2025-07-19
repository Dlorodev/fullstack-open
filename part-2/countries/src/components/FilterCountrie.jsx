/* eslint-disable react/prop-types */

const FiterCountrie = ({ value, countrieOnChange, reset }) => {
  return (
    <div>
      find countries
      <input type="text" value={value} onChange={countrieOnChange} />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default FiterCountrie;
