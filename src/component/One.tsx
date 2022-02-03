import React, { memo, useEffect, useRef } from 'react';
import { Two } from './Two';
import { useSelector, useDispatch } from 'react-redux';
import { AppData, counterActions } from '../store/store';

const One = memo(() => {
    const renders = useRef(1);
    const dispatch = useDispatch();
    const count = useSelector<AppData>((state) => state.countOne);

    useEffect(() => { renders.current++ });

    return (
        <>
            One Renders: {renders.current}
            <button onClick={() => dispatch(counterActions.incrementOne())}>reduxToolkit {count}</button>
            <div>
                <Two />
            </div>
        </>
    );
});

One.whyDidYouRender = {
    logOnDifferentValues:true
};
export { One };