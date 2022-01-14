import React, { useContext, useEffect, useRef, useState } from 'react';
import { createTrackedSelector, memo } from 'react-tracked';
import AppContext from '../store/app-context';
import { useStore } from '../store/state';
import { Three } from './Three';

const useTrackedStore = createTrackedSelector(useStore);

export const Two = memo(() => {
    const two = useStore(state => state.countTwo);
    const increaseTwo = useStore(state => state.increaseTwo);
    const appContext = useContext(AppContext);
    const [count, setCount] = useState(0);
    const trackedState = useTrackedStore();

    const renders = useRef(1);


    useEffect(() => { renders.current++ });

    return (
        <>
            Two Renders: {renders.current}
            <button onClick={() => setCount(c => c + 1)}>useState {count}</button>
            <button onClick={() => appContext.changeState({ ...appContext, countTwo: appContext.countTwo + 1 })}>useContext {appContext.countTwo}</button>
            <button onClick={() => increaseTwo()}>Zustand {two}</button>
            <button onClick={() => trackedState.increaseTwo()}>Zustand tracked {trackedState.countTwo}</button>

            <div>
                <Three />
            </div>
        </>
    );
});