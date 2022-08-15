import { BoxProps } from '@shopify/restyle'
import React from 'react'
import { StyleSheet } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

import { Box, Text } from '@/components'
import { Theme } from '@/theme'

type Props = BoxProps<Theme> & {
  color: string
  percentage: number
  size: number
  strokeWidth: number
}

export const CircularProgress: React.FC<Props> = ({
  color,
  percentage,
  size,
  strokeWidth,
  ...props
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const dash = (percentage * circumference) / 100

  return (
    <Box alignItems="center" {...props}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeOpacity={0.2}
        />
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <Box alignItems="center" justifyContent="center" style={StyleSheet.absoluteFill}>
        <Text fontSize={radius / 2} fontWeight="bold" textAlign="center" style={{ color }}>
          {percentage}%
        </Text>
      </Box>
    </Box>
  )
}
