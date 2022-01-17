import React, { memo, useEffect, useRef } from 'react';
import { Three } from './Three';
import { useSelector, useDispatch } from 'react-redux';
import { AppData, counterActions } from '../store/store';

export const Two = memo(() => {
    const dispatch = useDispatch();
    const count = useSelector<AppData>((state) => state.countTwo);
    const renders = useRef(1);

    useEffect(() => { renders.current++ });

    return (
        <>
            Two Renders: {renders.current}
            <button onClick={() => dispatch(counterActions.incrementTwo())}>reduxToolkit {count}</button>
            <div>
                <Three />
            </div>
        </>
    );
});