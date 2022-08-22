import { fireEvent, render, screen } from '@testing-library/react-native'
import React from 'react'

import { OverviewCard } from '@/features/family-overview/overview-card'
import { withProviders } from '../utils'

describe('OverviewCard', () => {
  it('renders correctly', () => {
    render(withProviders(<OverviewCard data={mockData} onSelection={jest.fn()} />))

    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should render the time asleep properly', () => {
    render(withProviders(<OverviewCard data={mockData} onSelection={jest.fn()} />))

    const timeAsleep = screen.getByText('6h 13m asleep')

    expect(timeAsleep).toBeDefined()
  })

  it('should call onSelection when a card is tapped', () => {
    const mockOnSelection = jest.fn()

    render(withProviders(<OverviewCard data={mockData} onSelection={mockOnSelection} />))

    const card = screen.getByText('John Doe')

    fireEvent.press(card)

    expect(mockOnSelection).toBeCalledWith(mockData)
  })
})

const mockData = {
  intervalId: '1489046760',
  userId: '2228b530e055401f81ba37b51ff6f81d',
  name: 'John Doe',
  averageHeartRate: 84,
  averageRespiratoryRate: 17,
  score: 44,
  timeAsleep: 22380,
}
