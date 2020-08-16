import React from 'react';

const Content = (props) => {
  const { children } = props;
  return (
    <div class="content">
      {children}
    </div>
  )
}

export default Content;