import React from 'react';
import Link from 'next/link';

const PageHeader = (props) => {
  const { title } = props;
  return (
    <div class="page-header">
      <div class="row">
        <div class="col-sm-12">
          <h3 class="page-title">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default PageHeader;