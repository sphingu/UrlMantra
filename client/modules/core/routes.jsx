import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/layout.jsx';
import LinkList from './containers/linkList';
import AddLink from './containers/addLink';

export default function(injectDeps, {FlowRouter}){
  const LayoutCtx = injectDeps(Layout);

    FlowRouter.route('/',{
      name: 'links.list',
      action(){
        mount(LayoutCtx,{
          content: ()=>(<LinkList />)
        });
      }
    });
    FlowRouter.route('/AddLink',{
      name: 'links.add',
      action(){
        mount(LayoutCtx,{
          content: ()=>(<AddLink />)
        });
      }
    });
};
