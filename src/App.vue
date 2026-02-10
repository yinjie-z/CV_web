<script setup lang="ts">
import { provide } from 'vue'
import HeroBlock from '@/components/blocks/HeroBlock.vue'
import ExperienceBlock from './components/blocks/ExperienceBlock.vue'
import ProjectBlock from './components/blocks/ProjectBlock.vue'
import SkillBlock from './components/blocks/SkillBlock.vue'
import ContactBlock from './components/blocks/ContactBlock.vue'

provide('lang', 'en')
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
