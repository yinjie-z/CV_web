<script setup lang="ts">
import jsonContEn from '@data/en/contact.json'
import jsonContFr from '@data/fr/contact.json'
import { reactive } from 'vue'

const props = defineProps(['lang'])
const localJson = reactive<Contact[]>([])
interface Contact {
  tool: string
  link: string
}

if (props.lang === 'en') {
  Object.assign(localJson, jsonContEn)
} else if (props.lang === 'fr') {
  Object.assign(localJson, jsonContFr)
}
</script>

<template>
  <div v-for="item in localJson" :key="item.tool">
    <div>{{ item.tool }}</div>
    <div>{{ item.link }}</div>
  </div>
</template>
