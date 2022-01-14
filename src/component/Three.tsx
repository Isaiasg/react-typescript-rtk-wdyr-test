import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../store/app-context';
import { Four } from './Four';


export const Three = (() => {
    const appContext = useContext(AppContext);
    const renders = useRef(1);

    useEffect(() => { renders.current++ });

    return (
        <>
            Three Renders: {renders.current}
            <button onClick={() => appContext.changeState({ ...appContext, countThree: appContext.countThree + 1 })}>useContext {appContext.countThree}</button>
            <div>
                <Four />
            </div>
        </>
    );
});