import { useTheme } from '@shopify/restyle'
import React, { useMemo } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'

import { Box, Card, CardProps, CircularProgress, Text } from '@/components'
import { strings } from '@/locales'
import { Theme } from '@/theme'
import { SleepIntervalOverview } from './types'

type Props = CardProps & {
  data: SleepIntervalOverview
  onSelection: (id: string) => void
}

export const OverviewCard: React.FC<Props> = ({ data, onSelection, ...props }) => {
  const theme = useTheme<Theme>()

  const { green, orange, red } = theme.colors
  const { hours, minutes } = getTimeFromSeconds(data.timeAsleep)

  const timeAsleep = `${hours}${strings.hoursShort} ${minutes}${strings.minutesShort}`
  const averageBpm = `${data.averageHeartRate}${strings.bpm}`
  const averageBrPM = `${data.averageRespiratoryRate}${strings.BrPM}`

  const scoreColor = useMemo(() => {
    if (data.score < 50) {
      return red
    }
    if (data.score < 75) {
      return orange
    }
    return green
  }, [data.score, green, orange, red])

  const handlePress = () => {
    onSelection(data.intervalId)
  }

  const computeStylesFromState = ({ pressed }: PressableStateCallbackType) => ({
    opacity: pressed ? 0.6 : 1,
    transform: [{ scale: pressed ? 0.98 : 1 }],
  })

  return (
    <Pressable onPress={handlePress} style={computeStylesFromState}>
      <Card
        backgroundColor="card"
        borderRadius={8}
        flexDirection="row"
        alignItems="center"
        paddingVertical="m"
        {...props}
      >
        <CircularProgress
          flex={1}
          marginRight="s"
          color={scoreColor}
          percentage={data.score}
          size={65}
          strokeWidth={4}
        />
        <Box flex={2}>
          <Text variant="subheader" marginBottom="s">
            {data.name}
          </Text>
          <Box flexDirection="row">
            <Box flex={1}>
              <Text color="purple" fontWeight="600">
                {timeAsleep}
              </Text>
            </Box>
            <Box flex={1} paddingLeft="s">
              <Text color="red" fontWeight="600">
                {averageBpm}
              </Text>
            </Box>
            <Box flex={1} paddingLeft="s">
              <Text color="blue" fontWeight="600">
                {averageBrPM}
              </Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </Pressable>
  )
}

function getTimeFromSeconds(seconds: number) {
  const dateString = new Date(seconds * 1000).toISOString()
  const hours = dateString.substring(11, 13)
  const minutes = dateString.substring(14, 16)

  return {
    hours,
    minutes,
  }
}
