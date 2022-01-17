import React, { memo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppData, counterActions } from '../store/store';

export const Four = memo(() => {
    const dispatch = useDispatch();
    const count = useSelector<AppData>((state) => state.countFour);
    const renders = useRef(1);

    useEffect(() => {renders.current++});

    return (
        <>
            Four Renders: {renders.current}
            <button onClick={() => dispatch(counterActions.incrementFour())}>useContext {count}</button>
        </>
    );
});