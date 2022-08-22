import { ResponsiveValue } from '@shopify/restyle'
import '@testing-library/jest-native'
import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { HealthMetricCard } from '@/features/sleep-details/health-metric-card'
import { Theme } from '@/ui'
import { withProviders } from '../utils'

describe('HealthMetricCard', () => {
  it('renders correctly', () => {
    render(withProviders(<HealthMetricCard {...mockData} />))

    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should render the metric and unit properly', () => {
    render(withProviders(<HealthMetricCard {...mockData} testID="card" />))

    const card = screen.getByTestId('card')

    expect(card).toHaveTextContent('60 bpm (avg)')
  })

  it('should have the correct title color', () => {
    render(withProviders(<HealthMetricCard {...mockData} />))

    const title = screen.getByText('Heart Rate')

    expect(title).toHaveStyle({ color: '#FF006A' })
  })
})

const mockData = {
  title: 'Heart Rate',
  metric: '60',
  unit: 'bpm (avg)',
  color: 'magenta' as ResponsiveValue<'purple', Theme>,
}
