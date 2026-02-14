<script setup lang="ts">
import { provide, ref } from 'vue'
import { LangKey } from '@/composables/LangKey'
import HeroBlock from '@/components/blocks/HeroBlock.vue'
import ExperienceBlock from './components/blocks/ExperienceBlock.vue'
import ProjectBlock from './components/blocks/ProjectBlock.vue'
import SkillBlock from './components/blocks/SkillBlock.vue'
import ContactBlock from './components/blocks/ContactBlock.vue'

const currentLang = ref('en') // Default language
const toggleLang = () => {
  currentLang.value = currentLang.value === 'en' ? 'fr' : 'en'
  document.documentElement.lang = currentLang.value
}

// Provide both the value and the function to change it
provide(LangKey, { currentLang, toggleLang })
</script>

<template>
  <header>
    <div class="wrapper">
      <nav></nav>
    </div>
  </header>
  <body class="caret-transparent cursor-default">
    <main
      class="min-h-screen bg-navy-900 text-slate-300 font-sans selection:bg-brand-primary/30 bg-slate-950"
    >
      <HeroBlock />
      <ExperienceBlock />
      <ProjectBlock />
      <SkillBlock />
      <ContactBlock />
    </main>
  </body>
</template>
