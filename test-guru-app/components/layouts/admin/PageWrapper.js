import React from 'react';

const PageWrapper = (props) => {
  const { children } = props;
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {children}
      </div>
    </div>
  )
}

export default PageWrapper;