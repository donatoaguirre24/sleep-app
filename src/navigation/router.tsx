import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Text } from '@/components'
import { FamilyView, SleepDetails } from '@/features'
import { RootStackParamList, Screens } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

type RouterProps = {
  isDarkMode: boolean
}

export const Router: React.FC<RouterProps> = ({ isDarkMode }) => {
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
          options={({ navigation, route }) => ({
            presentation: 'modal',
            title: route.params.userId,
            headerRight: () => <Text onPress={navigation.goBack}>Done</Text>,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
