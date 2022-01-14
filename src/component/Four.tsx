import React, { useContext, useEffect, useRef, useState } from 'react';
import { createTrackedSelector, memo } from 'react-tracked';
import AppContext from '../store/app-context';
import { useStore } from '../store/state';

const useTrackedStore = createTrackedSelector(useStore);

export const Four = memo(() => {
    const four = useStore(state => state.countFour);
    const increaseFour = useStore(state => state.increaseFour);
    const trackedState = useTrackedStore();
    const appContext = useContext(AppContext);
    const [count, setCount] = useState(0);
    const renders = useRef(1);

    useEffect(() => {renders.current++});

    return (
        <>
            Four Renders: {renders.current}
            <button onClick={() => setCount(c => c + 1)}>useState {count}</button>
            <button onClick={() => appContext.changeState({ ...appContext, countFour: appContext.countFour+1 })}>useContext {appContext.countFour}</button>
            <button onClick={() => increaseFour()}>Zustand {four}</button>
            <button onClick={() => trackedState.increaseFour()}>Zustand tracked {trackedState.countFour}</button>
        </>
    );
});