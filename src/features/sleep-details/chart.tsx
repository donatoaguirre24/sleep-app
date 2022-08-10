import React from 'react'
import { SafeAreaView } from 'react-native'

import { Card, Text } from '@/components'
import { SleepDetailsRouteProp } from '@/navigation'

type ChartProps = {
  route: SleepDetailsRouteProp
}

export const Chart: React.FC<ChartProps> = ({ route }) => {
  const userId = route.params.userId

  return (
    <SafeAreaView>
      <Card backgroundColor="greenLight" borderRadius={5} margin="m" height={200} />
      <Text color="foreground" textAlign="center">
        {`Sleep Data for ${userId}`}
      </Text>
    </SafeAreaView>
  )
}
