import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { FamilyView, SleepDetails } from '@/features'
import { RootStackParamList, Screens } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

interface Props {
  isDarkMode: boolean
}

export const Router: React.FC<Props> = ({ isDarkMode }) => {
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName={Screens.FamilyView}
        screenOptions={{ headerTransparent: true }}
      >
        <Stack.Screen
          name={Screens.FamilyView}
          component={FamilyView}
          options={{
            headerLargeTitle: true,
          }}
        />
        <Stack.Screen
          name={Screens.SleepDetails}
          component={SleepDetails}
          options={({ route }) => ({
            presentation: 'modal',
            // title: route.params.userId,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
