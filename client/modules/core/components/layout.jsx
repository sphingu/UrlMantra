import React from 'react';
import Navigation from './nav.jsx';

const Layout = ({content = () => null}) => (
  <div>
    <header>
      <h1>Header</h1>
    </header>
    <div>
      {content()}
    </div>
    <footer>
      <h3>Footer</h3>
    </footer>
  </div>
);

export default Layout;
