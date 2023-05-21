import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// eslint-disable-next-line react/react-in-jsx-scope
const Wrapper = () => <App />;
AppRegistry.registerComponent(appName, () => Wrapper);
