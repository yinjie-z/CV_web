<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/LangKey'

const { currentLang } = useLanguage()

const isScrolled = ref(false)

const handleScroll = () => {
  // Hide the indicator once the user scrolls down 50px
  isScrolled.value = window.scrollY > 50
}

const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
</style>

<template>
  <div
    class="absolute bottom-25 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer transition-all duration-700 z-30"
    :class="{ 'opacity-0 translate-y-10': isScrolled }"
    @click="scrollToContent"
  >
    <span
      v-if="currentLang === 'en'"
      class="text-[12px] uppercase tracking-[0.4em] text-slate-500 font-bold"
    >
      Discover
    </span>
    <span v-else class="text-[12px] uppercase tracking-[0.4em] text-slate-500 font-bold">
      Découvrir
    </span>

    <div class="flex flex-col items-center">
      <div
        class="w-px h-8 bg-linear-to-b from-blue-500 via-blue-500/50 to-transparent animate-pulse"
      ></div>

      <svg
        class="w-5 h-5 text-blue-500 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</template>
