import createDataContext from './createDataContext';

const locationsReducer = (state, actions) => {
    switch(actions.type) {
        case 'current_location':
            return { ...state, currentLocation : actions.payload };
        case 'stack_locations':
            return { ...state, locations: [...state.locations, actions.payload] };
        case 'start_rec':
            return { ...state, recording : true };
        case 'stop_rec':
            return { ...state, recording : false };
        case 'set_name':
            return { ...state, name: actions.payload };
        case 'reset':
            return { ...state, name:'', locations: [] };
        default:
            return state;
    }
};

const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'current_location', payload: location});   // 현재 위치 반환

    if (recording) {    // 기록에 씀 => locations 에 데이터 축적
        dispatch ({ type: 'stack_locations', payload: location});   // 위치 기록 중...
    }
};

const startRec = dispatch => () => {
    dispatch({ type: 'start_rec'});
};

const stopRec = dispatch => () => {
    dispatch({ type: 'stop_rec'})
};

const setName = dispatch => (name) => {
    dispatch({ type: 'set_name', payload : name});
};

const reset = dispatch => () => {
    dispatch({ type: 'reset' });
};

export const { Context, Provider } = createDataContext(
    locationsReducer,
    { addLocation, startRec, stopRec, setName, reset },
    { name: '', recording: false, locations: [], currentLocation: null }    // initial value of states
);