/* eslint-disable react/prop-types */

const Part = (props) => {
  console.log(props);

  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

export default Part;
