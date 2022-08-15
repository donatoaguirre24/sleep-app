import React from 'react'
import { SafeAreaView } from 'react-native'

import { Card, Text } from '@/components'
import { SleepDetailsRouteProp } from '@/navigation'

type Props = {
  route: SleepDetailsRouteProp
}

export const Chart: React.FC<Props> = ({ route }) => {
  const intervalId = route.params.intervalId

  return (
    <SafeAreaView>
      <Card backgroundColor="green" borderRadius={5} margin="m" height={200} />
      <Text textAlign="center">{`Sleep data for interval: ${intervalId}`}</Text>
    </SafeAreaView>
  )
}
