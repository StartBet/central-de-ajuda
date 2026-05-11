<script setup lang="ts">
import { computed, ref } from 'vue';
import type { HelpArticle, HelpCategory } from '../types/help-center';

const emit = defineEmits<{
  'update:query': [value: string];
  select: [article: HelpArticle];
}>();

const isSearchOpen = ref(false);

const props = defineProps<{
  query: string;
  resultCount: number;
  results: HelpArticle[];
  categories: HelpCategory[];
}>();

const categoryTitleById = computed(() =>
  Object.fromEntries(props.categories.map((category) => [category.id, category.title])),
);

const visibleResults = computed(() => props.results.slice(0, 5));

const hasQuery = computed(() => props.query.trim().length > 0);

const selectArticle = (article: HelpArticle) => {
  emit('select', article);
  isSearchOpen.value = false;
};

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;
</script>

<template>
  <header class="relative z-10 overflow-visible bg-midnight">
    <img
      :src="assetUrl('brand/startbet-sports-hero.svg')"
      alt=""
      class="absolute inset-0 z-0 h-full w-full object-cover opacity-70"
      aria-hidden="true"
    />
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/35" />
    <div class="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2 bg-gradient-to-r from-gold via-gold-soft to-gold" />

    <div class="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10">
      <section class="max-w-3xl">
        <div class="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-midnight-2/70 px-4 py-2 shadow-panel">
          <svg
            class="h-7 w-auto max-w-[150px] sm:max-w-[190px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 212 44"
            fill="none"
            role="img"
            aria-label="Start"
          >
            <path d="M112.787 9.10138H82.9143V18.2027H111.77V22H89.4396C84.4708 22 80.3999 26.0986 80.3999 31.1014V44H90.4574V31.1014H111.829V44H121.887V18.2027C121.887 13.2 117.816 9.10138 112.847 9.10138H112.787Z" fill="#F5F0DE" />
            <path d="M60.2849 9.10137V0H50.2275V9.10137H9.03975C4.07088 9.10137 0 13.2 0 18.2027V22C0 27.0027 4.07088 31.1014 9.03975 31.1014H33.8841V34.8986H2.51437V44H34.9018C39.8707 44 43.9415 39.9014 43.9415 34.8986V31.1014C43.9415 26.0986 39.8707 22 34.9018 22H10.0575V18.2027H57.7706V18.5041C53.4602 19.6493 50.2275 23.5671 50.2275 28.3288V34.8986C50.2275 39.9014 54.2983 44 59.2672 44H75.3113V34.8986H60.2251V18.2027H75.3113V9.10137H60.2251H60.2849Z" fill="#F5F0DE" />
            <path d="M165.769 18.2027H180.855V9.10137H165.769V0H155.711V9.10137H135.896C130.927 9.10137 126.856 13.2 126.856 18.2027V44H136.913V18.2027H163.254V18.5041C158.944 19.6493 155.711 23.5671 155.711 28.3288V34.8986C155.711 39.9014 159.782 44 164.751 44H180.795V34.8986H165.709V18.2027H165.769Z" fill="#F5F0DE" />
            <path d="M198.395 9.10138H184.566L201.868 26.5206L184.566 43.9397H198.395L209.351 32.9096C212.883 29.3534 212.883 23.5671 209.351 20.011L198.395 8.98083V9.10138Z" fill="#7FDD24" />
          </svg>
          <span class="h-6 w-px bg-gold/40" />
          <span class="text-xs font-black uppercase tracking-[0.18em] text-gold-soft">Central de Ajuda</span>
        </div>

        <p class="mb-3 text-sm font-black uppercase tracking-[0.18em] text-gold-soft">Bora simplificar?</p>
        <h1 class="font-display max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-normal text-sand sm:text-6xl lg:text-7xl">
          Ajuda simples, jogo leve.
        </h1>
        <p class="mt-5 max-w-xl text-base font-medium leading-7 text-sand/85">
          Encontre respostas sobre conta, pagamentos, segurança, promoções e apostas com clareza, sem rodeios.
        </p>

        <div class="relative mt-8 block max-w-2xl">
          <span class="sr-only">Buscar artigos na Central de Ajuda</span>
          <span class="group flex min-h-14 items-center gap-3 rounded-lg border border-gold/35 bg-sand px-4 shadow-panel transition focus-within:border-gold focus-within:ring-4 focus-within:ring-gold/25">
            <svg
              class="h-5 w-5 text-midnight-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              :value="query"
              class="min-w-0 flex-1 bg-transparent text-base font-semibold text-midnight outline-none placeholder:text-midnight-3/60"
              type="search"
              placeholder="Digite o que está procurando..."
              @focus="isSearchOpen = true"
              @blur="isSearchOpen = false"
              @input="emit('update:query', ($event.target as HTMLInputElement).value)"
            />
            <span class="hidden rounded-md bg-midnight px-2.5 py-1 text-xs font-black text-gold-soft sm:inline-flex">
              {{ resultCount }} resultados
            </span>
          </span>

          <div
            v-if="isSearchOpen"
            class="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-50 overflow-hidden rounded-lg border border-gold/25 bg-midnight-2 shadow-panel"
            @mousedown.prevent
          >
            <div class="border-b border-gold/15 px-4 py-3">
              <p class="text-xs font-black uppercase tracking-[0.16em] text-gold-soft">
                {{ hasQuery ? 'Resultados encontrados' : 'Conteúdos mais acessados' }}
              </p>
            </div>

            <div v-if="visibleResults.length" class="max-h-80 overflow-y-auto">
              <button
                v-for="article in visibleResults"
                :key="article.id"
                type="button"
                class="block w-full border-b border-gold/10 px-4 py-3 text-left transition last:border-b-0 hover:bg-midnight-3 focus:bg-midnight-3 focus:outline-none"
                @click="selectArticle(article)"
              >
                <span class="text-xs font-black uppercase tracking-[0.12em] text-gold-soft">
                  {{ categoryTitleById[article.categoryId] }}
                </span>
                <span class="mt-1 block text-sm font-black leading-5 text-sand">{{ article.title }}</span>
                <span class="mt-1 block text-xs font-medium leading-5 text-sand/70">{{ article.excerpt }}</span>
              </button>
            </div>

            <div v-else class="px-4 py-6">
              <p class="text-sm font-black text-sand">Não temos esse conteúdo ainda.</p>
              <p class="mt-2 text-sm font-medium leading-6 text-sand/70">
                Tente buscar por outra palavra ou escolha um dos tópicos abaixo.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-5 flex flex-wrap gap-2 text-xs font-bold text-sand/80">
          <span class="rounded-full border border-sand/20 bg-midnight-2/60 px-3 py-1">18+</span>
          <span class="rounded-full border border-sand/20 bg-midnight-2/60 px-3 py-1">
            Aposte com responsabilidade.
          </span>
        </div>
      </section>
    </div>
  </header>
</template>
