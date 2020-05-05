// 여기는 navigator 생성만 하고 넘겨줄겨
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator (
  {
    Home : HomeScreen,
    Component : ComponentScreen,
    List : ListScreen,
    Image : ImageScreen,
    Counter : CounterScreen,
    Color : ColorScreen,
    Square : SquareScreen,
    Text : TextScreen,
    Box : BoxScreen,
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