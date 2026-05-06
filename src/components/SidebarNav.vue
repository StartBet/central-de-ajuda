<script setup lang="ts">
import type { HelpCategory } from '../types/help-center';
import IconBadge from './IconBadge.vue';

defineProps<{
  categories: HelpCategory[];
  selectedCategoryId: string;
}>();

const emit = defineEmits<{
  select: [categoryId: string];
}>();
</script>

<template>
  <aside class="rounded-lg border border-gold/15 bg-midnight-2 p-4">
    <p class="px-2 text-sm font-black uppercase tracking-[0.14em] text-gold-soft">Categorias</p>
    <nav class="mt-4 space-y-2" aria-label="Categorias de ajuda">
      <button
        v-for="category in categories"
        :key="category.id"
        type="button"
        class="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-gold/15"
        :class="selectedCategoryId === category.id ? 'bg-midnight text-gold-soft' : 'text-sand/75'"
        @click="emit('select', category.id)"
      >
        <IconBadge :icon="category.icon" compact />
        <span class="min-w-0 flex-1 truncate">{{ category.title }}</span>
      </button>
    </nav>
  </aside>
</template>
