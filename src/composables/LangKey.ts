import { type InjectionKey, type Ref, inject } from 'vue'

export interface LangContext {
  currentLang: Ref<string> // Use Ref<> if you're passing the reactive ref
  toggleLang: () => void
}

// This key acts as a "Type-Safe" ID for your provided data
export const LangKey: InjectionKey<LangContext> = Symbol('LangContext')

export function useLanguage() {
  const context = inject(LangKey)
  if (!context) throw new Error('useLanguage must be used within a provider')
  return context
}
