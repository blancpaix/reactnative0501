// 여기는 navigator 생성만 하고 넘겨줄겨
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';

const navigator = createStackNavigator (
  {
    Home : HomeScreen,
    Component : ComponentScreen,
    
  },
  {
    initialRouteName : 'Home',
    defaultNavigationOptions: {
      title : "XXXXXX",
      headerTitleAlign : 'center',
    }
  }
);

export default createAppContainer(navigator);
  // 페이지 전환 네이베이터 넣어서 만든 컨테이너 넘김