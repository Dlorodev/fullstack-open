/* eslint-disable react/prop-types */

const FiterCountrie = ({ value, countrieOnChange }) => {
  return (
    <div>
      find countries
      <input type="text" value={value} onChange={countrieOnChange} />
    </div>
  );
};

export default FiterCountrie;
