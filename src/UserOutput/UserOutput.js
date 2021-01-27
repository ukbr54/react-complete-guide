import React from 'react';

const userOutput = (props) => {
    return (
        <div>
           <p>This is the first Paragraph</p>
           <p>Username: {props.username}</p>
        </div>
    );
};

export default userOutput;