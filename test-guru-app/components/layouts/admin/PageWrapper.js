import React from 'react';

const PageWrapper = (props) => {
  const { children } = props;
  return (
    <div className="page-wrapper">
      {children}
    </div>
  )
}

export default PageWrapper;