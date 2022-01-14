import React, { useContext, useEffect, useRef, useState } from 'react';
import { createTrackedSelector, memo } from 'react-tracked';
import AppContext from '../store/app-context';
import { useStore } from '../store/state';
import { Two } from './Two';

const useTrackedStore = createTrackedSelector(useStore);

export const One = memo(() => {
    const appContext = useContext(AppContext);
    const one = useStore(state => state.countOne);
    const increaseOne = useStore(state => state.increaseOne);
    const [count, setCount] = useState(0);
    const renders = useRef(1);
    const trackedState = useTrackedStore();

    useEffect(() => { renders.current++ });

    return (
        <>
            One Renders: {renders.current}
            <button onClick={() => setCount(c => c + 1)}>useState {count}</button>
            <button onClick={() => appContext.changeState({ ...appContext, countOne: appContext.countOne + 1 })}>useContext {appContext.countOne}</button>
            <button onClick={() => increaseOne()}>Zustand {one}</button>
            <button onClick={() => trackedState.increaseOne()}>Zustand tracked {trackedState.countOne}</button>
            <div>
                <Two />
            </div>
        </>
    );
});