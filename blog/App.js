import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator({
  Index : IndexScreen
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
  return <App />
};