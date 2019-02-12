import * as React from 'react';

export const Image = (props) => {
  const { name, source } = props;
  return <img className={name} src={source} />;
};

export const Test = () => {};
