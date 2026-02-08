<script setup lang="ts">
import jsonPrjEn from '@data/en/projects.json'
import jsonPrjFr from '@data/fr/projects.json'
import { reactive } from 'vue'

const props = defineProps(['lang'])
const localJson = reactive<Project[]>([])
interface Project {
  title: string
  description: string
  stack: string[]
}

if (props.lang === 'en') {
  Object.assign(localJson, jsonPrjEn)
} else if (props.lang === 'fr') {
  Object.assign(localJson, jsonPrjFr)
}
</script>

<template>
  <div v-for="item in localJson" :key="item.title">
    <div>{{ item.title }}</div>
    <div>{{ item.description }}</div>
    <div v-for="(value, index) in item.stack" :key="index">
      {{ value }}
    </div>
  </div>
</template>
