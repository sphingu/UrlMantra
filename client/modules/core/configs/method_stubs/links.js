import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'links.create'(_id, title) {
      check(_id, title, String);

      var link= {_id, title};
      Collections.Links.insert(link);
    }
  });
}
