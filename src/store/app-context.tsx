import React, { PropsWithChildren, useState } from 'react';
import AppData from './AppData';

export const initialAppState: AppData = {
    countOne:0,
    countTwo:0,
    countThree: 0,
    countFour: 0,
    changeState: () => { }
};

const AppContext = React.createContext(initialAppState);

export const AppContextProvider = (props: PropsWithChildren<{}>) => {

    const changeState = (appData: AppData) => {
        setAppState(current => {
            return {
                ...current,
                countOne: appData.countOne,
                countTwo: appData.countTwo,
                countThree: appData.countThree,
                countFour: appData.countFour
            };
        })
    };

    const [appState, setAppState] = useState({
        ...initialAppState,
        changeState: changeState
    });

    return (
        <AppContext.Provider value={appState}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;