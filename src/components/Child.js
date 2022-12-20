import React from 'react';

function Child(props) {
    console.log('props', props);
    let { string, test } = props; // string = props.string, test = props.test
    return (
        <div>
            Child{' '+string +' '+ test}
        </div>
    );
}

export default Child;