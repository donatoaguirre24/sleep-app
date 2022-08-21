import { AppRegistry, LogBox } from 'react-native'
import { name as appName } from './app.json'
import { App } from './src/app'

LogBox.ignoreLogs(['Require cycle: node_modules/victory'])

AppRegistry.registerComponent(appName, () => App)
