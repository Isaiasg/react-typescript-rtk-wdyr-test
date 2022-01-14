import React, { useContext, useEffect, useRef, useState } from 'react';
import { createTrackedSelector, memo } from 'react-tracked';
import AppContext from '../store/app-context';
import { useStore } from '../store/state';
import { Four } from './Four';

const useTrackedStore = createTrackedSelector(useStore);

export const Three = memo(() => {
    const three = useStore(state => state.countThree);
    const increaseThree = useStore(state => state.increaseThree);
    const appContext = useContext(AppContext);
    const [count, setCount] = useState(0);
    const renders = useRef(1);
    const trackedState = useTrackedStore();

    useEffect(() => { renders.current++ });

    return (
        <>
            Three Renders: {renders.current}
            <button onClick={() => setCount(c => c + 1)}>useState {count}</button>
            <button onClick={() => appContext.changeState({ ...appContext, countThree: appContext.countThree + 1 })}>useContext {appContext.countThree}</button>
            <button onClick={() => increaseThree()}>Zustand {three}</button>
            <button onClick={() => trackedState.increaseThree()}>Zustand tracked {trackedState.countThree}</button>

            <div>
                <Four />
            </div>
        </>
    );
});