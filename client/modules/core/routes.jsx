import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/layout.jsx';
import UrlList from './containers/urlList';

export default function(injectDeps, {FlowRouter}){
  const LayoutCtx = injectDeps(Layout);

  FlowRouter.route('/',{
    name: 'urls.list',
    action(){
      mount(LayoutCtx,{
        content: ()=>(<UrlList />)
      });
    }
  });
};
