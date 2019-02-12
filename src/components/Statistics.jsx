import * as React from 'react';

export const Statistics = (props) => {
  const {
    children, parentBlockName, labelName, labelText,
  } = props;
  return (
    <div className={parentBlockName}>
      <div className={`statistics__header ${labelName}`}>
        <span className={labelName}>{labelText}</span>
      </div>
      <div className="statisctis__body">{children}</div>
    </div>
  );
};
export const Test = () => {};

/**
 * <div className="statistics__km">
        <div className="statistics__header">
          <span className="statistics__label Million-km-of-earth">Million km of earth</span>
        </div>
        <div className="statisctis__body">
          <span className="statistics__valueKm">100</span>
        </div>
      </div>
 * <div className="statistics__c">
        <span className="statistics__valueC">-15</span>
        <span className="statistics__symbolO">o</span>
        <span className="statistics__symbolC" />
      </div>
      <div className="statistics__mass">
        <div className="statistics__valueMass">15</div>
        <div className="statistics__valueMass">%</div>
      </div>
 */
