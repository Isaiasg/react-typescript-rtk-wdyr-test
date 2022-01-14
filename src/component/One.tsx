import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../store/app-context';
import { Two } from './Two';

export const One = (() => {
    const appContext = useContext(AppContext);
    const renders = useRef(1);

    useEffect(() => { renders.current++ });

    return (
        <>
            One Renders: {renders.current}
            <button onClick={() => appContext.changeState({ ...appContext, countOne: appContext.countOne + 1 })}>useContext {appContext.countOne}</button>
            <div>
                <Two />
            </div>
        </>
    );
});