import { useTheme } from '@shopify/restyle'
import React from 'react'
import {
  VictoryAxis,
  VictoryChart,
  VictoryLegend,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
} from 'victory-native'

import { strings } from '@/locales'
import { hourStringFromISODate } from '@/services'
import { Theme } from '@/ui'
import { Interval, TemperatureSeries } from './types'

type Props = {
  interval: Interval
}

export const TemperatureChart: React.FC<Props> = ({ interval }) => {
  const { colors, spacing } = useTheme<Theme>()

  const bedTempData = formatTemperatureSeries(interval.timeseries.tempBedC)
  const roomTempData = formatTemperatureSeries(interval.timeseries.tempRoomC)

  const chartLegends = [
    {
      name: strings.sleepDetails.bed,
      symbol: { fill: colors.blue },
    },
    {
      name: strings.sleepDetails.room,
      symbol: { fill: colors.green },
    },
  ]

  return (
    <VictoryChart
      animate={{ duration: 500 }}
      height={250}
      padding={{ top: 20, bottom: 30, left: 50, right: 50 }}
      scale={{ x: 'time', y: 'linear' }}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        dependentAxis
        domain={{ y: [15, 40] }}
        tickFormat={(t) => `${t} ${strings.common.celsius}`}
        style={{
          axis: {
            stroke: colors.text,
          },
          grid: {
            stroke: 'none',
          },
          ticks: {
            stroke: 'none',
          },
          tickLabels: {
            fill: colors.text,
          },
        }}
      />
      <VictoryAxis
        fixLabelOverlap
        style={{
          axis: {
            stroke: colors.text,
          },
          grid: {
            stroke: 'none',
          },
          ticks: {
            stroke: 'none',
          },
          tickLabels: {
            fill: colors.text,
          },
        }}
        tickFormat={(date: Date) => hourStringFromISODate(date)}
      />
      <VictoryLegend
        x={125}
        y={5}
        data={chartLegends}
        gutter={spacing.l}
        orientation="horizontal"
        style={{
          labels: {
            fill: colors.text,
            fillOpacity: 0.8,
          },
        }}
      />
      <VictoryLine
        data={bedTempData}
        interpolation="natural"
        style={{
          data: {
            stroke: colors.blue,
          },
        }}
      />
      <VictoryLine
        data={roomTempData}
        interpolation="natural"
        style={{
          data: {
            stroke: colors.green,
          },
        }}
      />
      <VictoryScatter
        animate={{
          onLoad: {
            before: () => ({ opacity: 0 }),
            after: () => ({ opacity: 1 }),
          },
        }}
        data={bedTempData}
        labels={({ datum }) => datum.y.toFixed(1)}
        style={{
          data: {
            fill: colors.blue,
            opacity: ({ datum }) => datum.opacity,
          },
          labels: {
            fill: colors.blue,
            fontSize: 10,
            opacity: ({ datum }) => datum.opacity,
          },
        }}
      />
      <VictoryScatter
        animate={{
          onLoad: {
            before: () => ({ opacity: 0 }),
            after: () => ({ opacity: 1 }),
          },
        }}
        data={roomTempData}
        labels={({ datum }) => datum.y.toFixed(1)}
        style={{
          data: {
            fill: colors.green,
            opacity: ({ datum }) => datum.opacity,
          },
          labels: {
            fill: colors.green,
            fontSize: 10,
            opacity: ({ datum }) => datum.opacity,
          },
        }}
      />
    </VictoryChart>
  )
}

function formatTemperatureSeries(tempSeries: TemperatureSeries) {
  return tempSeries.map(([date, temp]) => ({
    x: new Date(date),
    y: temp,
  }))
}
