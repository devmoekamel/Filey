
"use client";
import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './Store'

export function Providers({ children }) {
  return (
    <Provider store={Store}>
        { children }
    </Provider>
      
  )
}

