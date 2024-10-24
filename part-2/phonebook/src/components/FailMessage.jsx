/* eslint-disable react/prop-types */
const FailMessage = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="fail">{message}</div>;
};

export default FailMessage;
