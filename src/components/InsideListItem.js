import React from 'react';

const InsideListItem = ({ label, important = false }) => {
  console.log(label);
  const style = {
    color: important ? 'tomato' : 'lightgrey',
  };

  return (
    <span style={style}>
      {label}
      <div>
        <pre>{JSON.stringify(label, undefined, 2)}</pre>
      </div>
    </span>
  );
};

export default InsideListItem;
