export default {
  create({Meteor, LocalState}, url) {


    if (!url) {
     return LocalState.set('ERROR', 'url is required.');
    }
    LocalState.set('ERROR', null);

    const id = Meteor.uuid();

    Meteor.call('urls.create', id, url, (err) => {
     if (err) {
       alert(`Url creating failed: ${err.message}`);
     }
    });
    FlowRouter.go(`/url/${id}`);
  },
  
  clearErrors({LocalState}) {
   return LocalState.set('ERROR', null);
  }
};
