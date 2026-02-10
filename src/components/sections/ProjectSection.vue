<script setup lang="ts">
import jsonPrjEn from '@data/en/projects.json'
import jsonPrjFr from '@data/fr/projects.json'
import { reactive, inject } from 'vue'

const lang = inject('lang') as string
const localJson = reactive<Project[]>([])
interface Project {
  title: string
  description: string
  stack: string[]
}

if (lang === 'en') {
  Object.assign(localJson, jsonPrjEn)
} else if (lang === 'fr') {
  Object.assign(localJson, jsonPrjFr)
}
</script>

<template>
  <div>
    <div class="mb-16 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
        Selected <span class="text-blue-500">Projects</span>
      </h2>
      <div class="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="item in localJson"
        :key="item.title"
        class="group relative flex flex-col bg-white/2 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/5 hover:border-blue-500/50 hover:-translate-y-2 overflow-hidden"
      >
        <div
          class="absolute -right-10 -top-10 h-32 w-32 bg-blue-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>

        <div class="mb-4">
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {{ item.title }}
            </h3>
            <!-- <svg
              class="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg> -->
          </div>
        </div>
        <p class="text-slate-400 text-sm leading-relaxed mb-6 grow">
          {{ item.description }}
        </p>

        <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          <span
            v-for="(value, index) in item.stack"
            :key="index"
            class="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            {{ value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
