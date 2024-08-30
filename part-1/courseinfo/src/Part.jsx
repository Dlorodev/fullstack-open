/* eslint-disable react/prop-types */

const Part = (props) => {
  console.log(props);
    console.log(props.name);
    
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};

export default Part;
