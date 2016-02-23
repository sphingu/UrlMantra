import { Links } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function() {
    Meteor.methods({
        'links.create' (_id, title) {
            check(_id, title, String);

            // Show the latency compensations
            Meteor._sleepForMs(500);

            var link = { _id, title };
            Links.insert(link);
        }
    });
}
