import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native'

import data from '@/data/overview.json'
import { NavigationProps, Screens } from '@/navigation'
import { OverviewList } from './overview-list'

export const FamilyOverview: React.FC<NavigationProps> = ({ navigation }) => {
  const { navigate } = navigation

  const showSleepData = useCallback(
    (intervalId: string) => {
      navigate(Screens.SleepDetails, { intervalId })
    },
    [navigate]
  )

  return (
    <SafeAreaView>
      <OverviewList data={data} onSelection={showSleepData} />
    </SafeAreaView>
  )
}
