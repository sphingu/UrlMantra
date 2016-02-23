export default {
  create({Meteor, LocalState}, link) {


    if (!link) {
     return LocalState.set('ERROR', 'link is required.');
    }
    LocalState.set('ERROR', null);

    const id = Meteor.uuid();

    Meteor.call('links.create', id, link, (err) => {
     if (err) {
       alert(`Link creating failed: ${err.message}`);
     }
    });
    FlowRouter.go(`/link/${id}`);
  },

  clearErrors({LocalState}) {
   return LocalState.set('ERROR', null);
 },
 toggleAddLinkDialog({LocalState}){
     LocalState.set('isOpenAddLinkDialog', !LocalState.get('isOpenAddLinkDialog'));
 }
};
