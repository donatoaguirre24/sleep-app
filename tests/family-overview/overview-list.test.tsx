import { fireEvent, render, screen } from '@testing-library/react-native'
import React from 'react'

import { OverviewList } from '@/features/family-overview/overview-list'
import { withProviders } from '../utils'

describe('OverviewList', () => {
  it('renders correctly', () => {
    render(withProviders(<OverviewList data={mockData} onSelection={jest.fn()} />))

    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should call onSelection when a card is tapped', () => {
    const mockOnSelection = jest.fn()

    render(withProviders(<OverviewList data={mockData} onSelection={mockOnSelection} />))

    const firstCard = screen.getByText('John Doe')

    expect(firstCard).toBeDefined()

    fireEvent.press(firstCard)

    expect(mockOnSelection).toBeCalledWith({
      intervalId: '1489046760',
      userId: '2228b530e055401f81ba37b51ff6f81d',
      name: 'John Doe',
      averageHeartRate: 84,
      averageRespiratoryRate: 17,
      score: 44,
      timeAsleep: 22380,
    })
  })
})

const mockData = [
  {
    date: '2017-03-09T08:06:00.000Z',
    data: [
      {
        intervalId: '1489046760',
        userId: '2228b530e055401f81ba37b51ff6f81d',
        name: 'John Doe',
        averageHeartRate: 84,
        averageRespiratoryRate: 17,
        score: 44,
        timeAsleep: 22380,
      },
      {
        intervalId: '1489036920',
        userId: 'd6c1355e38194139b8d0c870baf86365',
        name: 'Jane Doe',
        averageHeartRate: 52,
        averageRespiratoryRate: 14,
        score: 77,
        timeAsleep: 23760,
      },
      {
        intervalId: '1489037100',
        userId: 'f9bf229fd19e4c799e8c19a962d73449',
        name: 'Jack Doe',
        averageHeartRate: 57,
        averageRespiratoryRate: 13,
        score: 76,
        timeAsleep: 26340,
      },
    ],
  },
]
