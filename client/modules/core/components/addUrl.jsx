import React from 'react';
//import Portal from 'react-portal';
class AddUrl extends React.Component{
  render() {
    const { isOpenAddUrlDialog } = this.props;
    var modal_classes = (isOpenAddUrlDialog)? 'ui small modal transition visible active' : 'ui small modal transition hidden';
    var modals_classes = (isOpenAddUrlDialog)? 'ui dimmer modals page transition visible active' : 'ui dimmer modals page transition hidden';

    return(
      <div>
        {isOpenAddUrlDialog ? <p style={{color: 'green'}}>open</p> : <p style={{color: 'red'}}>close</p>}
        <div className={modals_classes}>
          <div className={modal_classes}>
            <div className="content">
              <div className='description'>
                <div className="ui header">We've auto-chosen a profile image for you.</div>
                <p>We've grabbed the following image from the <a href='https://www.gravatar.com' target='_blank'>gravatar</a> image associated with your registered e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </div>
            </div>
            <div className="actions">
              <div className='ui black deny button' onClick={this.toggleDialog.bind(this)}>
                 Nope
               </div>
               <div className='ui positive right labeled icon button' onClick={this.toggleDialog.bind(this)}>
                 Yep, that's me
                 <i className='checkmark icon'></i>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  toggleDialog(){
    const {toggleAddUrlDialog } =this.props;
    toggleAddUrlDialog();
  }
}

export default AddUrl;
