import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'urls.create'(_id, url) {
      check(_id, url, String);

      var url= {_id, url};
      Collections.Urls.insert(url);
    }
  });
}
