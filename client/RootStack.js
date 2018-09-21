import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import AddPost from './components/addPost';

const RootStack = createStackNavigator({
    Home: {
      screen: Home,
    },
    AddPost: {
      screen: AddPost
    }
});

export default RootStack;