/* eslint-disable react/prop-types */
import Part from './Part';

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, i) => (
        <Part key={part.id} part={course.parts[i]} />
      ))}
    </div>
  );
};

export default Content;
