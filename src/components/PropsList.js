import React from 'react';

//check and do something with props elements
const ListItem = ({ info, descript = true }) => {
  console.log(info);
  console.log(descript);

  const style = {
    color: descript ? 'tomato' : 'lightgrey',
  };
  return <li style={style}>{info}</li>;
};

//create a main list, it will be parsed in app.js and take react component from 'ListItem'
const MainList = () => {
  return (
    <ol>
      <ListItem info="info in this line..." descript={false} />
    </ol>
  );
};

export default MainList;
