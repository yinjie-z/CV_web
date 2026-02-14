<script setup lang="ts">
import jsonSkillEn from '@data/en/skills.json'
import jsonSkillFr from '@data/fr/skills.json'
import { computed } from 'vue'
import LanguageSection from './LanguageSection.vue'
import { useLanguage } from '@/composables/LangKey'

interface Skill {
  category: string
  skills: string[]
}

const { currentLang } = useLanguage()
const localJson = computed<Skill[]>(() => {
  return currentLang.value === 'fr' ? jsonSkillFr : jsonSkillEn
})
</script>

<template>
  <div>
    <div class="mb-16 text-center">
      <h2
        v-if="currentLang === 'en'"
        class="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase"
      >
        Technical <span class="text-blue-500">Stack</span>
      </h2>
      <h2 v-else class="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
        <span class="text-blue-500">Compétences</span> Techniques
      </h2>
      <div class="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="item in localJson"
        :key="item.category"
        class="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm"
      >
        <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-blue-500"></span>
          {{ item.category }}
        </h3>

        <ul class="flex flex-wrap gap-2">
          <li
            v-for="skill in item.skills"
            :key="skill"
            class="px-3 py-1.5 rounded-lg bg-white/3 border border-white/10 text-slate-300 text-xs font-medium hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/40 transition-all cursor-default"
          >
            {{ skill }}
          </li>
        </ul>
      </div>

      <LanguageSection />
    </div>
  </div>
</template>
