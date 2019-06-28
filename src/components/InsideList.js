import React from 'react';
import InsideListItem from './InsideListItem';

const InsideList = () => {
  return (
    <ul>
      <li>
        <InsideListItem label="Drink Coffee" />
      </li>
      <li>
        <InsideListItem label="Drink Beer" important />
      </li>
    </ul>
  );
};

export default InsideList;
