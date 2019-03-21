import React from 'react';

function Form( props ) {
    const { username, updateUsernameAC } = props;
    console.log( 'username = ', username );

    return (
        <div>
            <input type="text" name="username" value={username} 
            onChange={updateUsernameAC} />
            <br />
            Current username = {username}
        </div>
    );
}

export default Form;