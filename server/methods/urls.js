import {Urls} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'urls.create'(_id, url) {
      check(_id, url, String);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      var url= {_id, url};
      Urls.insert(url);
    }
  });
}
