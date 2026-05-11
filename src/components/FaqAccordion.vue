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
  <section class="rounded-lg bg-[#270644] px-5 py-6 sm:px-7 sm:py-8" aria-labelledby="faq-title">
    <div class="flex items-center gap-3">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7fdd24] text-[#270644]">
        <svg
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M8 10a4 4 0 0 1 8 0c0 3-4 3-4 6" />
          <path d="M12 20h.01" />
          <path d="M4.9 19.1a10 10 0 1 1 14.2 0" />
        </svg>
      </span>
      <h2 id="faq-title" class="font-display text-3xl font-black tracking-normal text-[#f5f0de] sm:text-4xl">
        Perguntas frequentes
      </h2>
    </div>

    <div v-if="faqs.length" class="mt-7 grid gap-1">
      <div v-for="item in faqs" :key="item.id">
        <button
          type="button"
          class="group flex w-full items-center gap-3 rounded-md py-3 text-left font-extrabold text-[#f5f0de] transition hover:text-[#7fdd24] focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/20"
          @click="openId = openId === item.id ? '' : item.id"
        >
          <svg
            class="h-3.5 w-3.5 shrink-0 text-[#f5f0de] transition group-hover:text-[#7fdd24]"
            :class="openId === item.id ? 'rotate-90 text-[#7fdd24]' : ''"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span>{{ item.question }}</span>
        </button>
        <p v-if="openId === item.id" class="pb-4 pl-7 pr-4 text-sm font-semibold leading-6 text-[#f5f0de]/70">
          {{ item.answer }}
        </p>
      </div>
    </div>

    <p v-else class="mt-5 text-sm font-semibold text-[#f5f0de]/70">Nenhuma dúvida frequente para esta categoria.</p>
  </section>
</template>
