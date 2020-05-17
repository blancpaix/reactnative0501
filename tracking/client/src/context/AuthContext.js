import createDataContext from './createDataContext';

const authReducer = (state, actions) => {
    switch(actions.type) {
        default:
            return state;
    }
};

const add = (a, b) => a+b;

export const { Provider, Context } = createDataContext(
    authReducer,
    { add },     // functions
    { errorMessage: '' }      // initial Values
)