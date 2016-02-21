import {   useDeps, composeWithTracker, composeAll } from 'mantra-core';
import AddUrl from '../components/addUrl.jsx';

export const composer = ({ context, clearErrors }, onData) => {
  const {LocalState} = context();
  const isOpenAddUrlDialog =  LocalState.get('isOpenAddUrlDialog') || false ;
  onData(null,{isOpenAddUrlDialog});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) =>({
  toggleAddUrlDialog: actions.urls.toggleAddUrlDialog,
  clearErrors: actions.urls.clearErrors,
  context: ()=> context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddUrl);
