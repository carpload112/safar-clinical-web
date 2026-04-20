'use client'
import { createContext, useContext } from 'react'
export const CtaContext = createContext<() => void>(() => {})
export const useOpenCta = () => useContext(CtaContext)
