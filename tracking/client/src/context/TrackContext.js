import server from '../api/server';
import createDataContext from '../context/createDataContext';

const trackReducer = (state, actions) => {
    switch ( actions.type ) {
        case 'load_tracks':
            return actions.payload;
        default:
            return state;
    }
};

const loadTracks = dispatch => async () => {
    const response = await server.get('/tracks');
    // console.log('너의 반응은?', response.data);
    dispatch({ type : 'load_tracks', payload: response.data})
};

const saveTrack = dispatch => async (name, locations) => {
    await server.post('/tracks', {name, locations});
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { loadTracks, saveTrack},
    []
);