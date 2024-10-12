/* eslint-disable react/prop-types */
const Filter = ({ value, onChange }) => {
  return (
    <>
      Filter shown with: <input value={value} onChange={onChange} />
    </>
  );
};

export default Filter;
