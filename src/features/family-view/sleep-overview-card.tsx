import { useTheme } from '@shopify/restyle'
import React from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'

import { Box, Card, CardProps, CircularProgress, Text } from '@/components'
import { Theme } from '@/theme'

export type SleepDataOverviewData = {
  intervalId: string
  userId: string
  name: string
  averageHeartRate: number
  averageRespiratoryRate: number
  score: number
  timeAsleep: number
}

type Props = CardProps & {
  data: SleepDataOverviewData
  onSelection: (id: string) => void
}

export const SleepOverviewCard: React.FC<Props> = ({ data, onSelection, ...props }) => {
  const { colors } = useTheme<Theme>()

  const timeAsleep = toFormattedTime(data.timeAsleep)

  const handlePress = () => {
    onSelection(data.intervalId)
  }

  const computeStylesFromState = ({ pressed }: PressableStateCallbackType) => ({
    opacity: pressed ? 0.75 : 1,
    transform: [{ scale: pressed ? 0.98 : 1 }],
  })

  const computeColorFromScore = (score: number) => {
    if (score < 50) {
      return colors.red
    }
    if (score < 75) {
      return colors.orange
    }
    return colors.green
  }

  return (
    <Pressable onPress={handlePress} style={computeStylesFromState}>
      <Card
        backgroundColor="card"
        borderRadius={8}
        flexDirection="row"
        alignItems="center"
        variant="elevated"
        paddingVertical="m"
        {...props}
      >
        <CircularProgress
          flex={1}
          marginRight="s"
          color={computeColorFromScore(data.score)}
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
                {timeAsleep.hours}h {timeAsleep.minutes}m
              </Text>
            </Box>
            <Box flex={1} paddingLeft="s">
              <Text color="red" fontWeight="600">
                {data.averageHeartRate}bpm
              </Text>
            </Box>
            <Box flex={1} paddingLeft="s">
              <Text color="cyan" fontWeight="600">
                {data.averageRespiratoryRate}BrPM
              </Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </Pressable>
  )
}

// TO-DO: refactor this helper
function toFormattedTime(seconds: number) {
  const dateString = new Date(seconds * 1000).toISOString()
  const hours = dateString.substring(11, 13)
  const minutes = dateString.substring(14, 16)

  return {
    hours,
    minutes,
  }
}
