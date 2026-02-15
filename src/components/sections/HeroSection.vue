<script setup lang="ts">
import jsonHeroEn from '@data/en/hero.json'
import jsonHeroFr from '@data/fr/hero.json'

import DownloadButton from '../common/DownloadButton.vue'
import ProfileImage from '@/components/common/ProfileImage.vue'
import QuickFacts from '@/components/sections/QuickFactSection.vue'
import { computed } from 'vue'
import { useLanguage } from '@/composables/LangKey'

interface Hero {
  name: string
  title: string
  summary: string
  stack: string[]
}

const { currentLang } = useLanguage()
const localJson = computed<Hero>(() => {
  return currentLang.value === 'fr' ? jsonHeroFr : jsonHeroEn
})
</script>

<template>
  <div class="relative max-w-7xl mx-auto px-6">
    <div class="flex flex-col md:flex-row gap-12 items-start justify-between">
      <div class="flex-1 space-y-8 z-10 text-left">
        <div class="space-y-4">
          <h1
            class="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase"
            data-test="lang"
          >
            {{ localJson.name }}
          </h1>
          <p class="text-2xl md:text-3xl text-slate-300 font-light">
            {{ localJson.title }}
          </p>
          <p class="text-lg text-slate-300 -mt-2 font-light">{{ localJson.summary }}</p>

          <div class="flex flex-wrap items-center gap-x-2 text-lg text-slate-400">
            <template v-for="(tech, index) in localJson.stack" :key="index">
              <span>{{ tech }}</span>
              <span v-if="index < localJson.stack.length - 1" class="text-slate-600">•</span>
            </template>
          </div>
        </div>

        <div class="flex gap-4">
          <DownloadButton />
        </div>

        <div class="mt-12">
          <QuickFacts />
        </div>
      </div>

      <div class="hidden md:block">
        <ProfileImage />
      </div>
    </div>
  </div>
</template>
