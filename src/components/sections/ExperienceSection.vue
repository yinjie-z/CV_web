<script setup lang="ts">
import jsonExpEn from '@data/en/experience.json'
import jsonExpFr from '@data/fr/experience.json'
import { reactive } from 'vue'

const props = defineProps(['lang'])
const localJson = reactive<Experience[]>([])
interface Experience {
  title: string
  company: string
  city: string
  startDate: string
  endDate: string
  tasks: string[]
}

if (props.lang === 'en') {
  Object.assign(localJson, jsonExpEn)
} else if (props.lang === 'fr') {
  Object.assign(localJson, jsonExpFr)
}
</script>

<template>
  <div v-for="item in localJson" :key="item.company">
    <div>{{ item.title }}</div>
    <div>{{ item.company }}</div>
    <div>{{ item.city }}</div>
    <div>{{ item.startDate }} - {{ item.endDate }}</div>
    <div v-for="(value, index) in item.tasks" :key="index">
      {{ value }}
    </div>
  </div>
</template>
