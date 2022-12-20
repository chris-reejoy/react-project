import React from 'react';
import '../scss/counter.scss';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../store/actions';

function Counter(props) {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count)
    return (
        <div class="counter-container">
            <button onClick={() => dispatch(decrement())}>-</button>
            <span class="count"> {count} </span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>

    );
}

export default Counter;