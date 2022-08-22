import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { OverviewSectionHeader } from '@/features/family-overview/overview-section-header'
import { withProviders } from '../utils'

describe('OverviewSectionHeader', () => {
  it('renders correctly', () => {
    render(withProviders(<OverviewSectionHeader date="2017-03-09T08:08:00.000Z" />))

    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should render the date properly formatted', () => {
    render(withProviders(<OverviewSectionHeader date="2017-03-09T08:08:00.000Z" />))

    const firstCard = screen.getByText('March 9, 2017')

    expect(firstCard).toBeDefined()
  })
})
