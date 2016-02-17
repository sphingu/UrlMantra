import UrlList from '../components/urlList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData)=> {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('urls.list').ready()){
    const urls = Collections.Urls.find().fetch();
    debugger;
    onData(null,{urls});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(UrlList);
