<script setup lang="ts">
import jsonFactsEn from '@data/en/facts.json'
import jsonFactsFr from '@data/fr/facts.json'
import { computed } from 'vue'
import { useLanguage } from '@/composables/LangKey'

interface Fact {
  number: string
  title: string
}

const { currentLang } = useLanguage()
const localJson = computed<Fact[]>(() => {
  return currentLang.value === 'fr' ? jsonFactsFr : jsonFactsEn
})
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8 md:gap-y-4 p-6 md:p-8 rounded-2xl bg-white/3 backdrop-blur-md border border-white/10 text-center md:text-left"
  >
    <div
      v-for="(value, index) in localJson"
      :key="index"
      class="flex flex-col items-center text-center"
      :class="
        index !== localJson.length - 1
          ? 'border-b border-white/10 pb-6 md:border-b-0 md:border-r md:pr-8 md:pb-0'
          : ''
      "
    >
      <span class="text-3xl font-bold text-white tracking-tight">
        {{ value.number }}
      </span>
      <span
        class="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap mt-3"
      >
        {{ value.title }}
      </span>
    </div>
  </div>
</template>
