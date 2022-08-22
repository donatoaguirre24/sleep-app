import {
  datePlusSeconds,
  dateStringFromISODate,
  dayStringFromISODate,
  getTimeFromSeconds,
  hourStringFromISODate,
} from '@/services'

describe('getTimeFromSeconds', () => {
  it('should return 0 hours & 1 minute', () => {
    const { minutes, hours } = getTimeFromSeconds(60)

    expect(minutes).toBe(1)
    expect(hours).toBe(0)
  })

  it('should return 2 hours & 3 minute', () => {
    const { minutes, hours } = getTimeFromSeconds(7380)

    expect(minutes).toBe(3)
    expect(hours).toBe(2)
  })
})

describe('datePlusSeconds', () => {
  it('should return 2022-08-22T00:00:10.000Z', () => {
    const originalDate = new Date('2022-08-22T00:00:00.000Z')
    const date = datePlusSeconds(originalDate, 10)

    expect(date.toISOString()).toBe('2022-08-22T00:00:10.000Z')
  })

  it('should return 2022-08-22T00:01:00.000Z', () => {
    const originalDate = new Date('2022-08-22T00:00:00.000Z')
    const date = datePlusSeconds(originalDate, 60)

    expect(date.toISOString()).toBe('2022-08-22T00:01:00.000Z')
  })
})

describe('hourStringFromISODate', () => {
  it('should return 7 AM', () => {
    const originalDate = new Date('2022-08-22T11:00:00.000Z')
    const hours = hourStringFromISODate(originalDate.toISOString())

    expect(hours).toBe('7 AM')
  })

  it('should return 3 PM', () => {
    const originalDate = new Date('2022-08-22T19:00:00.000Z')
    const hours = hourStringFromISODate(originalDate.toISOString())

    expect(hours).toBe('3 PM')
  })
})

describe('dayStringFromISODate', () => {
  it('should return March 8', () => {
    const originalDate = new Date('2022-03-08T12:00:00.000Z')
    const day = dayStringFromISODate(originalDate.toISOString())

    expect(day).toBe('March 8')
  })

  it('should return August 22', () => {
    const originalDate = new Date('2022-08-22T15:00:00.000Z')
    const day = dayStringFromISODate(originalDate.toISOString())

    expect(day).toBe('August 22')
  })
})

describe('dateStringFromISODate', () => {
  it('should return March 8, 2022', () => {
    const originalDate = new Date('2022-03-08T12:00:00.000Z')
    const date = dateStringFromISODate(originalDate.toISOString())

    expect(date).toBe('March 8, 2022')
  })

  it('should return August 22, 2022', () => {
    const originalDate = new Date('2022-08-22T15:00:00.000Z')
    const date = dateStringFromISODate(originalDate.toISOString())

    expect(date).toBe('August 22, 2022')
  })
})
