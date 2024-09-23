/* eslint-disable react/prop-types */

const Total = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <strong>
        <p>total of {total} exercises</p>
      </strong>
    </div>
  );
};

export default Total;
