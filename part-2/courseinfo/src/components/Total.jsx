/* eslint-disable react/prop-types */

const Total = ({ course }) => {
  console.log(course);

  return (
    <div>
      <strong>
        <p>
          total of{' '}
          {course.parts[0].exercises +
            course.parts[1].exercises +
            course.parts[2].exercises}{' '}
          exercises
        </p>
      </strong>
    </div>
  );
};

export default Total;
