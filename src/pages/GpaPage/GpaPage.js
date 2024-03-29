import React from 'react';
import SideBar from '../../components/SideBar';
import BlockList from '../../components/BlockList';

import '../../styles/gpaPage.css';

function GpaPage() {
  return (
    <div>
      <div id="gpa-page-body">
        <SideBar></SideBar>
        <BlockList></BlockList>
      </div>
    </div>
  );
}

export default GpaPage;
