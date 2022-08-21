import { useTheme } from '@shopify/restyle'
import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'

import { subjectData } from '@/data'
import { strings } from '@/locales'
import { SleepDetailsStackProps } from '@/navigation'
import { dayStringFromISODate } from '@/services'
import { Box, Text, Theme } from '@/ui'
import { HealthMetricCard } from './health-metric-card'
import { SleepStagesChart } from './sleep-stages-chart'
import { TemperatureChart } from './temperature-chart'

export const SleepDetails: React.FC<SleepDetailsStackProps> = ({ navigation, route }) => {
  const { spacing } = useTheme<Theme>()

  const { setOptions } = navigation
  const { intervalId, name, userId, averageHeartRate, averageRespiratoryRate } = route.params

  const { intervals } = subjectData[userId]
  const interval = intervals.find(({ id }) => id === intervalId)! // Non-Null assertion

  useLayoutEffect(() => {
    setOptions({ title: `${dayStringFromISODate(interval.ts)} - ${name}` })
  }, [setOptions, interval.ts, name])

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: spacing.m, paddingBottom: spacing.xl }}>
      <Box marginBottom="m">
        <Text variant="subheader" marginBottom="m">
          {strings.sleepDetails.healthMetricsTitle}
        </Text>
        <Box flexDirection="row" paddingHorizontal="s">
          <HealthMetricCard
            flex={1}
            title={strings.sleepDetails.heartRateTitle}
            metric={averageHeartRate}
            unit={`${strings.common.bpm} (${strings.common.averageShort})`}
            color="magenta"
          />
          <Box marginHorizontal="s" />
          <HealthMetricCard
            flex={1}
            title={strings.sleepDetails.respiratoryRateTitle}
            metric={averageRespiratoryRate}
            unit={`${strings.common.BrPM} (${strings.common.averageShort})`}
            color="blue"
          />
        </Box>
      </Box>
      <Box marginBottom="m">
        <Text variant="subheader" marginBottom="xs">
          {strings.sleepDetails.stagesChartTitle}
        </Text>
        <SleepStagesChart interval={interval} />
      </Box>
      <Box>
        <Text variant="subheader" marginBottom="xs">
          {strings.sleepDetails.temperatureChartTitle}
        </Text>
        <TemperatureChart interval={interval} />
      </Box>
    </ScrollView>
  )
}
