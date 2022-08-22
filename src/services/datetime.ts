export function dayStringFromISODate(ISODate: Date | string) {
  const date = new Date(ISODate)
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    timeZone: 'America/New_York',
  })
}

export function dateStringFromISODate(ISODate: Date | string) {
  const date = new Date(ISODate)
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/New_York',
  })
}

export function hourStringFromISODate(ISODate: Date | string) {
  const date = new Date(ISODate)
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    timeZone: 'America/New_York',
  })
}

export function datePlusSeconds(date: Date, delta: number) {
  const newDate = new Date(date)
  newDate.setSeconds(newDate.getSeconds() + delta)
  return newDate
}

export function getTimeFromSeconds(seconds: number) {
  return {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
  }
}
