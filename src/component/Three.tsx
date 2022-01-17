import React, { memo, useEffect, useRef } from 'react';
import { Four } from './Four';
import { useSelector, useDispatch } from 'react-redux';
import { AppData, counterActions } from '../store/store';

export const Three = memo(() => {
    const dispatch = useDispatch();
    const count = useSelector<AppData>((state) => state.countThree);
    const renders = useRef(1);

    useEffect(() => { renders.current++ });

    return (
        <>
            Three Renders: {renders.current}
            <button onClick={() => dispatch(counterActions.incrementThree())}>reduxToolkit {count}</button>
            <div>
                <Four />
            </div>
        </>
    );
});