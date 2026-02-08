<script setup lang="ts">
import jsonHeroEn from '@data/en/hero.json'
import jsonHeroFr from '@data/fr/hero.json'
import { reactive } from 'vue'

const props = defineProps(['lang'])
const localJson = reactive<Hero>({} as Hero)
interface Hero {
  name: string
  title: string
  summary: string
  stack: string[]
}

if (props.lang === 'en') {
  Object.assign(localJson, jsonHeroEn)
} else if (props.lang === 'fr') {
  Object.assign(localJson, jsonHeroFr)
}
</script>

<template>
  <div>
    <div>{{ localJson.name }}</div>
    <div>{{ localJson.title }}</div>
    <div>{{ localJson.summary }}</div>
    <div v-for="(value, index) in localJson.stack" :key="index">
      {{ value }}
    </div>
  </div>
  <div>
    <img src="/img/profile.jpg" alt="ZHAO Yinjie" />
  </div>
</template>
