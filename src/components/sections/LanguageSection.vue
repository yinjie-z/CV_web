<script setup lang="ts">
import jsonLangEn from '@data/en/languages.json'
import jsonLangFr from '@data/fr/languages.json'
import { reactive, inject } from 'vue'

const lang = inject('lang') as string
const localJson = reactive<Language[]>([])
interface Language {
  language: string
  level: string
}

if (lang === 'en') {
  Object.assign(localJson, jsonLangEn)
} else if (lang === 'fr') {
  Object.assign(localJson, jsonLangFr)
}
</script>

<template>
  <div
    class="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all backdrop-blur-sm"
  >
    <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
      Languages
    </h3>

    <div class="space-y-4">
      <div v-for="item in localJson" :key="item.language" class="flex flex-col gap-1">
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-slate-200">{{ item.language }}</span>
          <span class="text-[10px] uppercase tracking-widest text-blue-400">{{ item.level }}</span>
        </div>
        <div class="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div
            class="h-full bg-blue-600/50 transition-all duration-1000"
            :style="{ width: item.level === 'Native' ? '100%' : '80%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
