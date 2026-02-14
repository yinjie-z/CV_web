<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import ScrollIndicator from '../common/ScrollIndicator.vue'
import ToggleLanguageButton from '@/components/common/ToggleLanguageButton.vue'
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
    <div class="absolute inset-0">
      <div
        class="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
      ></div>
      <div
        class="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]"
      ></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-20 w-full">
      <HeroSection />
    </div>
    <ScrollIndicator />
    <ToggleLanguageButton />
  </section>
</template>
