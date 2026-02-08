<script setup lang="ts">
import jsonFactsEn from '@data/en/facts.json'
import jsonFactsFr from '@data/fr/facts.json'
import { reactive } from 'vue'

const props = defineProps(['lang'])
const localJson = reactive<Fact[]>([])
interface Fact {
  number: string
  title: string
}

if (props.lang === 'en') {
  Object.assign(localJson, jsonFactsEn)
} else if (props.lang === 'fr') {
  Object.assign(localJson, jsonFactsFr)
}
</script>

<template>
  <div v-for="value in localJson" :key="value.title">{{ value.number }} {{ value.title }}</div>
</template>
