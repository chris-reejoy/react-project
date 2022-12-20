import React from 'react';
import Child from './Child';

function Parent() {
    return (
        <div className='parent-container'>
            Parent Component
            <Child string={'pass'} test="christy"/>
        </div>
    );
}

export default Parent;