import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '@shopify/restyle'
import React from 'react'

import { FamilyOverview, SleepDetails } from '@/features'
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
      <Stack.Navigator initialRouteName={Screens.FamilyOverview}>
        <Stack.Screen
          name={Screens.FamilyOverview}
          component={FamilyOverview}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            },
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
            presentation: 'modal',
            title: strings.sleepDetails.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
