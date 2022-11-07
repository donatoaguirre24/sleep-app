import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '@shopify/restyle'
import React from 'react'
import { Platform } from 'react-native'

import { FamilyOverview, SleepDetails, UsersListScreen } from '@/features'
import { strings } from '@/locales'
import { Theme } from '@/ui'
import { RootStackParamList, Screens } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

type Props = {
  isDarkMode: boolean
}

export const Router: React.FC<Props> = ({ isDarkMode }) => {
  const { colors } = useTheme<Theme>()

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={Screens.UsersList}>
        <Stack.Screen
          name={Screens.UsersList}
          component={UsersListScreen}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitleAlign: 'center',
            title: strings.usersList.header,
          }}
        />
        <Stack.Screen
          name={Screens.FamilyOverview}
          component={FamilyOverview}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitleAlign: 'center',
            title: strings.familyOverview.header,
          }}
        />
        <Stack.Screen
          name={Screens.SleepDetails}
          component={SleepDetails}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitleAlign: 'center',
            presentation: Platform.OS === 'ios' ? 'modal' : 'card',
            title: strings.sleepDetails.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
