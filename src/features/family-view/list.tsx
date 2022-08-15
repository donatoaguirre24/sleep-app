import { useTheme } from '@shopify/restyle'
import React from 'react'
import { SafeAreaView, SectionList } from 'react-native'

import data from '@/data/overview.json'
import { NavigationProps, Screens } from '@/navigation'
import { Theme } from '@/theme'
import { SectionHeader } from './list-section-header'
import { SleepOverviewCard } from './sleep-overview-card'

export const List: React.FC<NavigationProps> = ({ navigation }) => {
  const { spacing } = useTheme<Theme>()

  const showSleepData = (intervalId: string) => {
    navigation.navigate(Screens.SleepDetails, { intervalId })
  }

  return (
    <SafeAreaView>
      <SectionList
        contentContainerStyle={{ paddingBottom: spacing.m }}
        contentInsetAdjustmentBehavior="automatic"
        keyExtractor={(item, index) => item.userId + index}
        sections={data}
        renderItem={({ item }) => (
          <SleepOverviewCard
            marginBottom="m"
            marginHorizontal="m"
            data={item}
            onSelection={showSleepData}
          />
        )}
        renderSectionHeader={({ section }) => (
          <SectionHeader paddingHorizontal="m" paddingVertical="s" rawDate={section.date} />
        )}
      />
    </SafeAreaView>
  )
}
