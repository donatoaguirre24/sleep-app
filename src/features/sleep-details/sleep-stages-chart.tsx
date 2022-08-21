import { useTheme } from '@shopify/restyle'
import React from 'react'
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
} from 'victory-native'

import { datePlusSeconds, hourStringFromISODate } from '@/services'
import { Theme } from '@/ui'
import { Interval, StageElement, StageEnum } from './types'

type Props = {
  interval: Interval
}

export const SleepStagesChart: React.FC<Props> = ({ interval }) => {
  const { colors } = useTheme<Theme>()

  const data = formatStages(interval.stages, interval.ts)

  const computeColorFromStage = (stage: StageEnum) => {
    switch (stage) {
      case StageEnum.Out:
        return colors.orange
      case StageEnum.Awake:
        return colors.purple
      case StageEnum.Light:
        return colors.green
      case StageEnum.Deep:
        return colors.blue
    }
  }

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
        categories={{ y: [StageEnum.Deep, StageEnum.Light, StageEnum.Awake, StageEnum.Out] }}
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
            fill: ({ text: stage }: { text: StageEnum }) => computeColorFromStage(stage),
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
      <VictoryArea
        data={data}
        interpolation="stepAfter"
        style={{
          data: {
            fill: colors.gray,
            fillOpacity: 0.25,
            stroke: colors.gray,
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
        data={data}
        style={{
          data: {
            fill: ({ datum }) => computeColorFromStage(datum.y),
            opacity: ({ datum }) => datum.opacity,
          },
        }}
      />
    </VictoryChart>
  )
}

function formatStages(stages: Array<StageElement>, intervalStart: Date) {
  let delta = 0

  return stages.map(({ stage, duration }) => {
    const stageStart = datePlusSeconds(intervalStart, delta)

    delta += duration

    return {
      x: stageStart,
      y: stage,
    }
  })
}
