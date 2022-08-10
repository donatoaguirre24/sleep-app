import React from 'react'
import { SafeAreaView } from 'react-native'

import { Card, Text } from '@/components'
import { strings } from '@/locales'
import { NavigationProps, Screens } from '@/navigation'

export const IndividualsList: React.FC<NavigationProps> = ({ navigation }) => {
  const showSleepData = () => {
    navigation.navigate(Screens.SleepDetails, { userId: 'John Doe' })
  }

  return (
    <SafeAreaView>
      <Card bg="purpleLight" borderRadius={5} mx="m" mt="m" variant="elevated">
        <Text variant="header" onPress={showSleepData}>
          {strings.headerExample}
        </Text>
        <Text>{strings.bodyExample}</Text>
      </Card>
    </SafeAreaView>
  )
}
