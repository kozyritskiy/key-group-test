import React from "react";

import "./progress-line.scss";

const Progress = ({percent}) => {
  const classUpper = `progress-line__upper progress-line__upper_${percent}`
  return (
    <div className='progress'>
      <h3 className='progress__title'>CREATE ACCOUNT</h3>
      <div className='progress-line'>
        <div className='progress-line__lower'></div>
        <div className={classUpper}></div>
      </div>
    </div>
  );
};

export default Progress;

