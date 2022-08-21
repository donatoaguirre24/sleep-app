export type SubjectSleepData = {
  intervals: Interval[]
}

export type Interval = {
  id: string
  ts: Date
  stages: Array<StageElement>
  score: number
  timeseries: TimeSeries
}

export type StageElement = {
  stage: StageEnum
  duration: number
}

export enum StageEnum {
  Awake = 'awake',
  Deep = 'deep',
  Light = 'light',
  Out = 'out',
}

export type TimeSeries = {
  tnt: Array<Array<Date | number>>
  tempRoomC: Array<Array<Date | number>>
  tempBedC: Array<Array<Date | number>>
  respiratoryRate: Array<Array<Date | number>>
  heartRate: Array<Array<Date | number>>
  heating: Array<Array<Date | number>>
}

export type TemperatureSeries = Array<Array<Date | number>>
