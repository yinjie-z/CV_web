<script setup lang="ts">
import jsonLangEn from '@data/en/languages.json'
import jsonLangFr from '@data/fr/languages.json'
import { reactive } from 'vue'

const props = defineProps(['lang'])
const localJson = reactive<Language[]>([])
interface Language {
  language: string
  level: number
}

if (props.lang === 'en') {
  Object.assign(localJson, jsonLangEn)
} else if (props.lang === 'fr') {
  Object.assign(localJson, jsonLangFr)
}
</script>

<template>
  <div v-for="item in localJson" :key="item.language">
    <div>{{ item.language }}</div>
    <div>{{ item.level }}</div>
  </div>
</template>
