import React, { useCallback } from 'react'

import { overviewData } from '@/data'
import { FamilyViewStackProps, Screens } from '@/navigation'
import { OverviewList } from './overview-list'
import { SleepIntervalOverview } from './types'

export const FamilyOverview: React.FC<FamilyViewStackProps> = ({ navigation }) => {
  const { navigate } = navigation

  const showSleepData = useCallback(
    (sleepOverviewData: SleepIntervalOverview) => {
      navigate(Screens.SleepDetails, sleepOverviewData)
    },
    [navigate]
  )

  return <OverviewList data={overviewData} onSelection={showSleepData} />
}
