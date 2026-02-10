import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeroSection from '@/components/sections/HeroSection.vue'

describe('HeroSection', () => {
  it('renders properly', () => {
    const wrapper = mount(HeroSection, {
      global: {
        provide: {
          lang: 'en',
        },
      },
    })
    expect(wrapper.get('[data-test="lang"]').text()).toBe('en')
  })
})
