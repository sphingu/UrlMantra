import LinkList from '../components/linkList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData)=> {
  const {Meteor, Collections, LocalState} = context();
  const isOpenAddLinkDialog =  LocalState.get('isOpenAddLinkDialog') || false ;
  if(Meteor.subscribe('links.list').ready()){
    const links = Collections.Links.find().fetch();
    onData(null,{links, isOpenAddLinkDialog});
  }
};
export const depsMapper = (context, actions) =>({
  toggleAddLinkDialog: actions.links.toggleAddLinkDialog,
  context: ()=> context
});
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LinkList);
