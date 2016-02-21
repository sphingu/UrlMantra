import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/layout.jsx';
import UrlList from './containers/urlList';
import AddUrl from './containers/addUrl';

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
    FlowRouter.route('/AddUrl',{
      name: 'urls.add',
      action(){
        mount(LayoutCtx,{
          content: ()=>(<AddUrl />)
        });
      }
    });
};
