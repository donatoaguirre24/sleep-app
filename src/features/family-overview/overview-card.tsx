import { useTheme } from '@shopify/restyle'
import React, { useMemo } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'

import { strings } from '@/locales'
import { getTimeFromSeconds } from '@/services'
import { Box, Card, CardProps, CircularProgress, Text, Theme } from '@/ui'
import { SleepIntervalOverview } from './types'

type Props = CardProps & {
  data: SleepIntervalOverview
  onSelection: (data: SleepIntervalOverview) => void
}

export const OverviewCard: React.FC<Props> = ({ data, onSelection, ...props }) => {
  const { colors } = useTheme<Theme>()
  const { hours, minutes } = getTimeFromSeconds(data.timeAsleep)

  const timeAsleep = `${hours}${strings.common.hoursShort} ${minutes}${strings.common.minutesShort} ${strings.common.asleep}`
  const averageBpm = `${data.averageHeartRate}${strings.common.bpm} (${strings.common.averageShort})`

  const scoreColor = useMemo(() => {
    if (data.score < 50) {
      return colors.red
    }
    if (data.score < 75) {
      return colors.orange
    }
    return colors.green
  }, [data.score, colors])

  const handlePress = () => {
    onSelection(data)
  }

  const computeStylesFromState = ({ pressed }: PressableStateCallbackType) => ({
    opacity: pressed ? 0.6 : 1,
    transform: [{ scale: pressed ? 0.98 : 1 }],
  })

  return (
    <Pressable onPress={handlePress} style={computeStylesFromState}>
      <Card
        backgroundColor="card"
        flexDirection="row"
        alignItems="center"
        variant="elevated"
        paddingVertical="m"
        {...props}
      >
        <CircularProgress
          flex={1}
          marginRight="s"
          color={scoreColor}
          percentage={data.score}
          size={65}
          strokeWidth={5}
        />
        <Box flex={3}>
          <Text variant="subheader" marginBottom="s">
            {data.name}
          </Text>
          <Box flexDirection="row">
            <Box flex={1}>
              <Text color="secondaryGray" fontWeight="600">
                {timeAsleep}
              </Text>
            </Box>
            <Box flex={1} paddingLeft="s">
              <Text color="magenta" fontWeight="600">
                ♥ {averageBpm}
              </Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </Pressable>
  )
}
