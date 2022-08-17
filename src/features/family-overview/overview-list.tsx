import { useTheme } from '@shopify/restyle'
import React from 'react'
import { SectionList } from 'react-native'

import { Theme } from '@/theme'
import { OverviewCard } from './overview-card'
import { OverviewSectionHeader } from './overview-section-header'
import { DailyFamilyOverview } from './types'

type Props = {
  data: Array<DailyFamilyOverview>
  onSelection: (id: string) => void
}

export const OverviewList: React.FC<Props> = ({ data, onSelection }) => {
  const { spacing } = useTheme<Theme>()

  return (
    <SectionList
      contentContainerStyle={{ paddingBottom: spacing.m }}
      contentInsetAdjustmentBehavior="automatic"
      keyExtractor={(item, index) => item.userId + index}
      sections={data}
      renderItem={({ item }) => (
        <OverviewCard marginBottom="m" marginHorizontal="m" data={item} onSelection={onSelection} />
      )}
      renderSectionHeader={({ section }) => (
        <OverviewSectionHeader paddingHorizontal="m" paddingVertical="s" rawDate={section.date} />
      )}
    />
  )
}
