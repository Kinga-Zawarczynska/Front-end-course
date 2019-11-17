import React from 'react';

function Avatar ({login}) {
    let imgUrl='';
    if (login.includes('@')) {
         imgUrl = `https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50`;
    } else {
         imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
    }
    return (
        <img src={imgUrl} classname="ui mini rounded image" alt=""/>
    )
}

export default Avatar;