<script setup lang="ts">
import type { HelpArticle } from '../types/help-center';

defineProps<{
  articles: HelpArticle[];
  selectedArticleId: string;
}>();

const emit = defineEmits<{
  select: [articleId: string];
}>();
</script>

<template>
  <section aria-labelledby="articles-title">
    <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p class="text-sm font-black uppercase tracking-[0.16em] text-gold-soft">Artigos</p>
        <h2 id="articles-title" class="font-display mt-1 text-4xl font-black uppercase tracking-normal text-sand">
          Respostas rápidas
        </h2>
      </div>
      <p class="text-sm font-semibold text-sand/65">{{ articles.length }} artigos encontrados</p>
    </div>

    <div v-if="articles.length" class="space-y-3">
      <button
        v-for="article in articles"
        :key="article.id"
        type="button"
        class="w-full rounded-lg border p-5 text-left transition hover:border-gold/60 hover:bg-midnight-3+ focus:outline-none focus:ring-4 focus:ring-gold/15"
        :class="
          selectedArticleId === article.id
            ? 'border-gold/70 bg-midnight-3'
            : 'border-gold/10 bg-midnight-2'
        "
        @click="emit('select', article.id)"
      >
        <div class="flex flex-wrap items-center gap-2">
          <h3 class="text-lg font-black text-white">{{ article.title }}</h3>
          <span
            v-if="article.status"
            class="rounded-full px-2.5 py-1 text-xs font-bold"
            :class="{
              'bg-gold/15 text-gold-soft': article.status === 'popular',
              'bg-felt/15 text-emerald-200': article.status === 'new',
              'bg-grape/35 text-sand': article.status === 'updated',
            }"
          >
            {{ article.status === 'popular' ? 'Popular' : article.status === 'new' ? 'Novo' : 'Atualizado' }}
          </span>
        </div>
        <p class="mt-2 text-sm font-medium leading-6 text-sand/75">{{ article.excerpt }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in article.tags.slice(0, 3)"
            :key="tag"
            class="inline-flex items-center gap-2 rounded-lg bg-[#80DD24] px-2.5 py-1 text-xs font-bold text-midnight"
          >
            {{ tag }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              aria-hidden="true"
              class="h-4 w-3 shrink-0"
            >
              <path
                d="M10.8967 5.24047C12.3678 6.76447 12.3678 9.23553 10.8967 10.7595L5.83847 16H0L7.72185 8L0 0H5.83847L10.8967 5.24047Z"
                fill="#EFEBFC"
              />
            </svg>
          </span>
        </div>
      </button>
    </div>

    <div v-else class="rounded-lg border border-gold/15 bg-midnight-2 p-8 text-center">
      <h3 class="text-xl font-black text-sand">Nenhum artigo encontrado</h3>
      <p class="mt-2 text-sm leading-6 text-sand/75">
        Tente buscar por outro termo ou selecione uma categoria diferente.
      </p>
    </div>
  </section>
</template>
