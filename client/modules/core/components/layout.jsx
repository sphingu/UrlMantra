import React from 'react';

import Navigation from './nav.jsx';
import FooterBar from './footer.jsx';

const Layout = ({content = () => null}) => (
    <div>
        <header>
            <Navigation />
        </header>
        <div className="ui main container">
            {content()}
        </div>
        <footer>
            <FooterBar />
        </footer>
    </div>
);

export default Layout;
