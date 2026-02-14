<script setup lang="ts">
import jsonLangEn from '@data/en/languages.json'
import jsonLangFr from '@data/fr/languages.json'
import { computed } from 'vue'
import { useLanguage } from '@/composables/LangKey'

interface Language {
  language: string
  level: string
}

const { currentLang } = useLanguage()
const localJson = computed<Language[]>(() => {
  return currentLang.value === 'fr' ? jsonLangFr : jsonLangEn
})
</script>

<template>
  <div
    class="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all backdrop-blur-sm"
  >
    <h3
      v-if="currentLang === 'en'"
      class="text-lg font-bold text-white mb-6 flex items-center gap-2"
    >
      <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
      Languages
    </h3>
    <h3 v-else class="text-lg font-bold text-white mb-6 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
      Langues
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
            v-if="currentLang === 'en'"
            :style="{ width: item.level === 'Native' ? '100%' : '80%' }"
          ></div>
          <div
            class="h-full bg-blue-600/50 transition-all duration-1000"
            v-else
            :style="{ width: item.level === 'Maternelle' ? '100%' : '80%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
