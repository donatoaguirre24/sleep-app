import { useTheme } from '@shopify/restyle'
import React from 'react'
import { SectionList } from 'react-native'

import { Theme } from '@/ui'
import { OverviewCard } from './overview-card'
import { OverviewSectionHeader } from './overview-section-header'
import { DailyFamilyOverview, SleepIntervalOverview } from './types'

type Props = {
  data: Array<DailyFamilyOverview>
  onSelection: (data: SleepIntervalOverview) => void
}

export const OverviewList: React.FC<Props> = ({ data, onSelection }) => {
  const { spacing } = useTheme<Theme>()

  return (
    <SectionList
      contentContainerStyle={{ paddingBottom: spacing.m, paddingHorizontal: spacing.m }}
      contentInsetAdjustmentBehavior="automatic"
      keyExtractor={(item, index) => item.userId + index}
      sections={data}
      renderItem={({ item }) => (
        <OverviewCard marginBottom="m" data={item} onSelection={onSelection} />
      )}
      renderSectionHeader={({ section }) => (
        <OverviewSectionHeader paddingVertical="s" rawDate={section.date} />
      )}
    />
  )
}
