import UrlList from '../components/urlList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData)=> {
  const {Meteor, Collections, LocalState} = context();
  const isOpenAddUrlDialog =  LocalState.get('isOpenAddUrlDialog') || false ;
  if(Meteor.subscribe('urls.list').ready()){
    const urls = Collections.Urls.find().fetch();
    onData(null,{urls, isOpenAddUrlDialog});
  }
};
export const depsMapper = (context, actions) =>({
  toggleAddUrlDialog: actions.urls.toggleAddUrlDialog,
  context: ()=> context
});
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UrlList);
