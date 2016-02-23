import {   useDeps, composeWithTracker, composeAll } from 'mantra-core';
import AddLink from '../components/addLink.jsx';

export const composer = ({ context, clearErrors }, onData) => {
  const {LocalState} = context();
  const isOpenAddLinkDialog =  LocalState.get('isOpenAddLinkDialog') || false ;
  onData(null,{isOpenAddLinkDialog});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) =>({
  toggleAddLinkDialog: actions.links.toggleAddLinkDialog,
  clearErrors: actions.links.clearErrors,
  context: ()=> context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddLink);
