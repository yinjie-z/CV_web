<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import QuickFacts from '@/components/sections/QuickFactSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectSection from './components/sections/ProjectSection.vue'
import SkillSection from './components/sections/SkillSection.vue'
import LanguageSection from './components/sections/LanguageSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav></nav>
    </div>
  </header>
  <body>
    <HeroSection lang="en" />
    <QuickFacts lang="en" />
    <ExperienceSection lang="en" />
    <ProjectSection lang="en" />
    <SkillSection lang="en" />
    <LanguageSection lang="en" />
    <ContactSection lang="en" />
  </body>
</template>
