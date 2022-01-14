import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../store/app-context';
import { Three } from './Three';

export const Two = (() => {
    const appContext = useContext(AppContext);
    const renders = useRef(1);

    useEffect(() => { renders.current++ });

    return (
        <>
            Two Renders: {renders.current}
            <button onClick={() => appContext.changeState({ ...appContext, countTwo: appContext.countTwo + 1 })}>useContext {appContext.countTwo}</button>
            <div>
                <Three />
            </div>
        </>
    );
});