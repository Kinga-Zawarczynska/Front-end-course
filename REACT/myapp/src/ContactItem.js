import React from 'react';
import Avatar from './Avatar'

function ContactItem({ name, department }) {
    return (
      <div className="item">
        <Avatar login="{login}/"></Avatar>
        <div className="content">
          <h4 className="header">{name}</h4>
          <div className="description">{department}</div>
        </div>
      </div>
    );
  }
  
 export default ContactItem;