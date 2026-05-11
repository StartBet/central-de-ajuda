<script setup lang="ts">
import type { HelpCategory } from '../types/help-center';

defineProps<{
  categories: HelpCategory[];
  selectedCategoryId: string;
}>();

const emit = defineEmits<{
  select: [categoryId: string];
}>();

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const categoryImages: Record<HelpCategory['id'], string> = {
  depositos: 'brand/category-depositos-ai.png',
  saques: 'brand/category-saques-ai.png',
  'conta-login': 'brand/category-conta-login-ai.png',
  seguranca: 'brand/category-seguranca-ai.png',
  bonus: 'brand/category-bonus-ai.png',
  apostas: 'brand/category-apostas-ai.png',
};
</script>

<template>
  <section aria-labelledby="topics-title">
    <div class="mb-6 flex items-center gap-4">
      <span class="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-midnight" aria-hidden="true">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 11h6M9 15h3M6 3h9l3 3v15H6z" />
          <path d="M15 3v4h4" />
        </svg>
      </span>
      <h2 id="topics-title" class="font-display text-4xl font-black uppercase tracking-normal text-sand sm:text-5xl">
        Principais tópicos
      </h2>
    </div>

    <div class="mb-3 flex items-center justify-end gap-2 text-xs font-black uppercase tracking-[0.12em] text-gold-soft md:hidden">
      <span>Arraste para ver mais</span>
      <svg class="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </div>

    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-midnight to-transparent md:hidden" />
      <div class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-10 [scrollbar-width:none] md:grid md:overflow-visible md:pb-0 md:pr-0 md:snap-none md:grid-cols-2 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden">
      <button
        v-for="category in categories"
        :key="category.id"
        type="button"
        class="group relative min-h-48 w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-lg border p-5 text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gold/15 sm:w-[46vw] md:w-auto md:max-w-none md:p-6"
        :class="[
          'border-[#7fdd24]/10 bg-[#3f136d] shadow-[0_18px_38px_rgba(0,0,0,0.34),0_1px_0_rgba(255,255,255,0.08)_inset] hover:border-[#7fdd24]/30 hover:bg-[#51238c] hover:shadow-[0_24px_48px_rgba(0,0,0,0.42),0_1px_0_rgba(255,255,255,0.1)_inset]',
          selectedCategoryId === category.id ? 'ring-4 ring-[#7fdd24]/20' : '',
        ]"
        @click="emit('select', category.id)"
      >
        <div class="flex min-h-28 flex-col gap-5 sm:flex-row sm:items-center">
          <span
            class="flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#A474F5] bg-[#6C3CAD] sm:w-36"
            aria-hidden="true"
          >
            <img
              :src="assetUrl(categoryImages[category.id])"
              alt=""
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </span>
          <div class="min-w-0">
            <h3 class="text-xl font-black text-sand">{{ category.title }}</h3>
            <p class="mt-3 max-w-sm text-sm font-medium leading-6 text-sand/75">{{ category.description }}</p>
          </div>
        </div>
      </button>
      </div>
    </div>
  </section>
</template>
