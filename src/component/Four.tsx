import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../store/app-context';

export const Four = (() => {
    const appContext = useContext(AppContext);
    const renders = useRef(1);

    useEffect(() => {renders.current++});

    return (
        <>
            Four Renders: {renders.current}
            <button onClick={() => appContext.changeState({ ...appContext, countFour: appContext.countFour+1 })}>useContext {appContext.countFour}</button>
        </>
    );
});