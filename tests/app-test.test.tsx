import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { App } from '@/app'
import { strings } from '@/locales'

test('The app renders correctly', () => {
  render(<App />)

  const cardTitle = screen.getByText(strings.headerExample)

  expect(cardTitle).toBeDefined()
})
