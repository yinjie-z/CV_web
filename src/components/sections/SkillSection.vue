<script setup lang="ts">
import jsonSkillEn from '@data/en/skills.json'
import jsonSkillFr from '@data/fr/skills.json'
import { reactive } from 'vue'

const props = defineProps(['lang'])
const localJson = reactive<Skill[]>([])
interface Skill {
  category: string
  skills: string[]
}

if (props.lang === 'en') {
  Object.assign(localJson, jsonSkillEn)
} else if (props.lang === 'fr') {
  Object.assign(localJson, jsonSkillFr)
}
</script>

<template>
  <div v-for="item in localJson" :key="item.category">
    <h3>{{ item.category }}</h3>
    <ul>
      <li v-for="skill in item.skills" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>
