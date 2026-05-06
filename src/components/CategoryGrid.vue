<script setup lang="ts">
import type { HelpCategory } from '../types/help-center';

defineProps<{
  categories: HelpCategory[];
  selectedCategoryId: string;
}>();

const emit = defineEmits<{
  select: [categoryId: string];
}>();

const categoryImages: Record<HelpCategory['id'], string> = {
  depositos: '/brand/topic-depositos.png',
  saques: '/brand/topic-saques.png',
  'conta-login': '/brand/topic-conta-login.png',
  seguranca: '/brand/topic-seguranca.png',
  bonus: '/brand/topic-bonus.png',
  apostas: '/brand/topic-apostas.png',
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

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <button
        v-for="category in categories"
        :key="category.id"
        type="button"
        class="group relative min-h-48 overflow-visible rounded-lg border p-6 text-left transition hover:-translate-y-0.5 hover:border-gold/70 hover:bg-midnight-3 focus:outline-none focus:ring-4 focus:ring-gold/15"
        :class="[
          'rounded-[10px] border-[#DF7000] bg-midnight-3 shadow-[0_3px_0_0_#FFD04E_inset,-3px_-3px_0_0_#EF6507_inset]',
          selectedCategoryId === category.id ? 'ring-4 ring-gold/15' : '',
        ]"
        @click="emit('select', category.id)"
      >
        <span
          class="absolute -right-3 -top-4 flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#DF7000] bg-[#FEA900] shadow-[0_3px_0_0_#FFD04E_inset,-3px_-3px_0_0_#EF6507_inset,0_5px_0_0_rgba(39,6,68,0.65)]"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="21"
            viewBox="0 0 8 21"
            fill="none"
            class="h-7 w-3"
          >
            <g :filter="`url(#attention-icon-shadow-${category.id})`">
              <path
                d="M5.00858 10.46C4.97421 11.1478 4.40653 11.6878 3.71788 11.6878H2.72146C2.0328 11.6878 1.46512 11.1478 1.43076 10.46L1.02592 2.35679C0.989039 1.61866 1.57757 1 2.31661 1H4.12272C4.86177 1 5.4503 1.61867 5.41342 2.35679L5.00858 10.46ZM1.00001 15.6421C1.00001 14.9567 1.18847 14.4257 1.56539 14.0491C1.94232 13.665 2.49025 13.4729 3.2092 13.4729C3.92116 13.4729 4.45863 13.665 4.82159 14.0491C5.19153 14.4257 5.37651 14.9567 5.37651 15.6421C5.37651 16.32 5.18455 16.851 4.80065 17.2351C4.42373 17.6117 3.89324 17.8 3.2092 17.8C2.51817 17.8 1.97722 17.6117 1.58634 17.2351C1.19545 16.851 1.00001 16.32 1.00001 15.6421Z"
                fill="#F4F7FB"
              />
              <path
                d="M3.20911 12.9727C4.00487 12.9727 4.69054 13.1888 5.17688 13.6982H5.17786C5.66467 14.1938 5.8761 14.8668 5.8761 15.6426C5.87601 16.418 5.65393 17.0891 5.15442 17.5889C4.65914 18.0837 3.98631 18.2998 3.20911 18.2998C2.42562 18.2998 1.74697 18.0838 1.23938 17.5947L1.23547 17.5918C0.727488 17.0925 0.500216 16.4205 0.500122 15.6426C0.500122 14.8642 0.716441 14.1905 1.21204 13.6953C1.71103 13.1891 2.40454 12.9727 3.20911 12.9727ZM4.12317 0.5L4.31262 0.509766C5.24652 0.607926 5.96115 1.42221 5.91321 2.38184L5.50793 10.4854C5.46008 11.4391 4.67286 12.1875 3.7179 12.1875H2.7218C1.76684 12.1875 0.979629 11.4391 0.931763 10.4854L0.526489 2.38184C0.475345 1.35815 1.29158 0.500048 2.31653 0.5H4.12317Z"
                stroke="#97322E"
              />
            </g>
            <defs>
              <filter
                :id="`attention-icon-shadow-${category.id}`"
                x="0"
                y="0"
                width="7.70735"
                height="20.0923"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1.29231" dy="1.29231" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.592157 0 0 0 0 0.196078 0 0 0 0 0.180392 0 0 0 1 0"
                />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
            </defs>
          </svg>
        </span>
        <div class="flex min-h-28 flex-col gap-5 pr-8 sm:flex-row sm:items-center">
          <span
            class="flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#A474F5] bg-[#6C3CAD] p-2 sm:w-36"
            aria-hidden="true"
          >
            <img
              :src="categoryImages[category.id]"
              alt=""
              class="h-full w-full object-contain"
            />
          </span>
          <div class="min-w-0">
            <h3 class="text-xl font-black text-sand">{{ category.title }}</h3>
            <p class="mt-3 max-w-sm text-sm font-medium leading-6 text-sand/75">{{ category.description }}</p>
          </div>
        </div>
      </button>
    </div>
  </section>
</template>
