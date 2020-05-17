import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = (navi) => {
    navigator = navi
};

// navigation.navigate 랑 기능 똑같이 구현 {1: route, 2: parmeter}
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
};