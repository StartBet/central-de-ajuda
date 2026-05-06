<script setup lang="ts">
import { ref, watch } from 'vue';
import type { FaqItem } from '../types/help-center';

const props = defineProps<{
  faqs: FaqItem[];
}>();

const openId = ref(props.faqs[0]?.id ?? '');

watch(
  () => props.faqs,
  (items) => {
    openId.value = items[0]?.id ?? '';
  },
);
</script>

<template>
  <section class="rounded-lg border border-gold/15 bg-midnight-2 p-6" aria-labelledby="faq-title">
    <p class="text-sm font-black uppercase tracking-[0.16em] text-gold-soft">FAQ</p>
    <h2 id="faq-title" class="font-display mt-1 text-4xl font-black uppercase tracking-normal text-sand">
      Dúvidas frequentes
    </h2>

    <div v-if="faqs.length" class="mt-5 divide-y divide-gold/15">
      <div v-for="item in faqs" :key="item.id" class="py-3">
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 py-2 text-left font-bold text-sand focus:outline-none focus:ring-4 focus:ring-gold/15"
          @click="openId = openId === item.id ? '' : item.id"
        >
          <span>{{ item.question }}</span>
          <svg
            class="h-5 w-5 shrink-0 text-gold-soft transition"
            :class="openId === item.id ? 'rotate-45' : ''"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
        <p v-if="openId === item.id" class="pb-3 pr-8 text-sm font-medium leading-6 text-sand/75">
          {{ item.answer }}
        </p>
      </div>
    </div>

    <p v-else class="mt-4 text-sm text-sand/75">Nenhuma dúvida frequente para esta categoria.</p>
  </section>
</template>
