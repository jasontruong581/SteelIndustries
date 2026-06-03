import { createContext, useContext } from 'react'
import type { LangContextValue } from '@/hooks/use-lang'

export const LangContext = createContext<LangContextValue | null>(null)

export function useLangCtx() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLangCtx must be used within LangContext.Provider')
  return ctx
}
