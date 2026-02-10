<script setup lang="ts">
import jsonContEn from '@data/en/contact.json'
import jsonContFr from '@data/fr/contact.json'
import IconEmail from '@/components/common/icons/IconEmail.vue'
import IconGithub from '@/components/common/icons/IconGithub.vue'
import IconLinkedin from '@/components/common/icons/IconLinkedin.vue'

import { reactive, inject } from 'vue'

const lang = inject('lang') as string
const localJson = reactive<Contact[]>([])
interface Contact {
  tool: string
  link: string
}

if (lang === 'en') {
  Object.assign(localJson, jsonContEn)
} else if (lang === 'fr') {
  Object.assign(localJson, jsonContFr)
}
const formatDisplayLink = (link: string) => {
  return link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

const getIcon = (tool: string) => {
  const t = tool.toLowerCase()
  if (t.includes('github')) return IconGithub
  if (t.includes('linkedin')) return IconLinkedin
  if (t.includes('email')) return IconEmail
  return IconEmail // Default
}
</script>

<template>
  <div>
    <div class="mb-12 text-center">
      <h2 class="text-3xl font-bold text-white tracking-tight uppercase">
        Get in <span class="text-blue-500">Touch</span>
      </h2>
      <p class="text-slate-500 mt-2 font-light">
        Available for innovative projects and technical discussions.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <a
        v-for="item in localJson"
        :key="item.tool"
        :href="item.tool.toLowerCase() === 'email' ? `mailto:${item.link}` : item.link"
        target="_blank"
        class="group relative p-8 rounded-2xl bg-white/2 border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:bg-white/5 hover:-translate-y-2 flex flex-col items-center text-center"
      >
        <div
          class="mb-4 p-4 rounded-full bg-blue-500/10 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500"
        >
          <component
            :is="getIcon(item.tool)"
            class="w-6 h-6"
            :class="item.tool.toLowerCase() === 'email' ? 'stroke-current' : 'fill-current'"
          />
        </div>

        <h3 class="text-lg font-bold text-white mb-1 uppercase tracking-widest">
          {{ item.tool }}
        </h3>
        <p class="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
          {{ formatDisplayLink(item.link) }}
        </p>

        <div
          class="mt-6 flex items-center gap-2 text-[10px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          OPEN LINK
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </a>
    </div>

    <div class="mt-24 pt-8 border-t border-white/5 text-center">
      <p class="text-slate-600 text-xs tracking-widest uppercase">
        &copy; {{ new Date().getFullYear() }} ZHAO Yinjie • Built with Vue 3 & Tailwind
      </p>
    </div>
  </div>
</template>
