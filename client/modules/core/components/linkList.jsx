import React from 'react';
import AddLink from './addLink.jsx';

function ToShort(text){
  if(text.length>18){
    return text.substring(0,18)+"...";
  }
  return text;
}
class LinkList extends React.Component {
  render(){
    const {links} = this.props;

    return (
      <div>
        <div className="ui center aligned basic segment">
          <div className="ui teal labeled icon button" onClick={this.openCreateLinkDialog.bind(this)}>
            Create New
            <i className="add icon"></i>
          </div>
          <div className="ui horizontal divider">
            Or
          </div>
          <div className="ui left icon action input">
            <i className="search icon"></i>
            <input type="text" placeholder="Title #" />
            <div className="ui blue submit button">Search</div>
          </div>
        </div>

        <div className="ui four cards doubling stackable">
          {links.map(link=>(
            <div key={link._id} className="ui fluid card blue" href="#">
              <div className="content">
                <i className="right floated like icon"></i>
                <i className="right floated star icon"></i>
                <div className="header" title={link.title}>{ToShort(link.title)}</div>
                <div className="meta">
                  <span className="right floated time">2 days ago</span>
                  <span className="category">Category</span>
                </div>
                <div className="description">
                  <p>description {link.id}...</p>
                  <p>read more</p>
                </div>
              </div>
              <div className="extra content">
                <span className="left floated like">
                  <i className="like icon"></i>
                  Like
                </span>
                <span className="left floated star">
                  <i className="star icon"></i>
                  Favorite
                </span>
                <div className="right floated author">
                  <img className="ui avatar image" src="data:image/png;base64,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" /> User
                  </div>
                </div>
              </div>
            ))}
          </div>
          <AddLink {...this.props} />
        </div>
    );
  }
  openCreateLinkDialog(){
      const {toggleAddLinkDialog} = this.props;
      toggleAddLinkDialog();
  }
}

export default LinkList;
