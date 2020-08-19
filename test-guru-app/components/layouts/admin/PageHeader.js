import React from 'react';
import Link from 'next/link';

const PageHeader = (props) => {
  const { title } = props;
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default PageHeader;