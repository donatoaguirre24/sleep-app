export type SleepIntervalOverview = {
  intervalId: string
  userId: string
  name: string
  averageHeartRate: number
  averageRespiratoryRate: number
  score: number
  timeAsleep: number
}

export type DailyFamilyOverview = {
  date: string
  data: Array<SleepIntervalOverview>
}
