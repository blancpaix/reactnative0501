import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);     // 여기 (dispatch) 가 뭔지 잘 모르겟..
        };

        return (
            <Context.Provider value={{ state, ...boundActions }} >
                {children}
            </Context.Provider>
        )
    };

    return { Context, Provider };
}