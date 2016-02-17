import {Urls} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';


export default function () {
  Meteor.publish('urls.list', function () {
    const selector = {};
    const options = {
       fields: {_id: 1, url: 1},
      // sort: {createdAt: -1},
      // limit: 10
    };

    return Urls.find(selector, options);
  });
}
