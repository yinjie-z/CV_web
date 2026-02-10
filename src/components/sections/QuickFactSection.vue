<script setup lang="ts">
import jsonFactsEn from '@data/en/facts.json'
import jsonFactsFr from '@data/fr/facts.json'
import { reactive, inject } from 'vue'

const lang = inject('lang') as string
const localJson = reactive<Fact[]>([])
interface Fact {
  number: string
  title: string
}

if (lang === 'en') {
  Object.assign(localJson, jsonFactsEn)
} else if (lang === 'fr') {
  Object.assign(localJson, jsonFactsFr)
}
</script>

<template>
  <div
    class="inline-grid grid-cols-3 gap-x-8 gap-y-4 p-8 rounded-2xl bg-white/3 backdrop-blur-md border border-white/10"
  >
    <div
      v-for="(value, index) in localJson"
      :key="index"
      class="flex flex-col items-center text-center"
      :class="index !== localJson.length - 1 ? 'border-r border-white/10 pr-8' : ''"
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
