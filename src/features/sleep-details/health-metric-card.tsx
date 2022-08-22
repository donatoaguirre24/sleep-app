import { ResponsiveValue } from '@shopify/restyle'
import React from 'react'

import { Box, Card, CardProps, Text, Theme } from '@/ui'

type Props = CardProps & {
  title: string
  metric: string | number
  unit: string
  color: ResponsiveValue<keyof Theme['colors'], Theme>
}

export const HealthMetricCard: React.FC<Props> = ({ title, metric, unit, color, ...props }) => {
  return (
    <Card backgroundColor="card" minHeight={75} variant="elevated" {...props}>
      <Text variant="card" color={color}>
        {title}
      </Text>
      <Box flexDirection="row" alignItems="baseline" flex={1} paddingTop="s">
        <Text variant="header" color="text">
          {metric}{' '}
        </Text>
        <Text variant="card" color="secondaryGray">
          {unit}
        </Text>
      </Box>
    </Card>
  )
}
