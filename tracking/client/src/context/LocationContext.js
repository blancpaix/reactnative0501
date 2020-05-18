import createDataContext from './createDataContext';

const locationsReducer = (state, actions) => {
    switch(actions.type) {
        case 'current_location':
            return { ...state, currentLocation : actions.payload };
        case 'add_location':
            return { ...state, locations: [...state.locations, actions.payload] };
        default:
            return state;
    }
};

const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'current_location', payload: location});   // 현재 위치 반환

    if (recording) {    // 기록에 씀 => locations 에 데이터 축적
        dispatch ({ type: 'stack_locations', payload: location});   // 위치 기록 중...
    }
}

export const { Context, Provider } = createDataContext(
    locationsReducer,
    { addLocation },
    { name: '', recording: false, locations: [], currentLocation: null }    // initial value of states
);