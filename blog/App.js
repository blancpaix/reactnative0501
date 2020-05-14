import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';

import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index : IndexScreen,
  Create : CreateScreen,
  Show : ShowScreen,
  Edit : EditScreen
}, {
  initialRouteName : 'Index',
  defaultNavigationOptions : {
    title : '타이틀 제목'
  }
});

// export default createAppContainer(navigator);
const App = createAppContainer(navigator);

// 커스텀 컴포넌트 사용
export default () => {

// context 사용시 이거 설정해야함
  return <Provider>
    <App />
  </Provider>
};