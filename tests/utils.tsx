import { ThemeProvider } from '@shopify/restyle'
import React, { ReactElement } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { lightTheme } from '@/ui'

export const withProviders = (component: ReactElement) => {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>
    </SafeAreaProvider>
  )
}
