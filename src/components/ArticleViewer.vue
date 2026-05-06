<script setup lang="ts">
import type { HelpArticle, HelpCategory } from '../types/help-center';

defineProps<{
  article?: HelpArticle;
  category?: HelpCategory;
}>();
</script>

<template>
  <article class="rounded-lg border border-gold/15 bg-midnight-2 p-6 lg:sticky lg:top-6">
    <template v-if="article">
      <p class="text-sm font-black uppercase tracking-[0.16em] text-gold-soft">
        {{ category?.title ?? 'Artigo' }}
      </p>
      <h2 class="mt-3 text-2xl font-black leading-tight text-sand">{{ article.title }}</h2>
      <p class="mt-3 text-sm font-medium leading-6 text-sand/75">{{ article.excerpt }}</p>

      <div class="mt-6 space-y-4">
        <div
          v-for="(paragraph, index) in article.content"
          :key="paragraph"
          class="rounded-lg border border-gold/10 bg-midnight p-4"
        >
          <p class="text-xs font-black uppercase tracking-[0.14em] text-gold-soft">Passo {{ index + 1 }}</p>
          <p class="mt-2 text-sm font-medium leading-6 text-sand/85">{{ paragraph }}</p>
        </div>
      </div>

      <div class="mt-6 border-t border-gold/15 pt-5">
        <p class="text-sm font-black text-sand">Tags relacionadas</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="tag in article.tags"
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
      </div>
    </template>

    <template v-else>
      <h2 class="text-2xl font-black text-sand">Selecione um artigo</h2>
      <p class="mt-3 text-sm leading-6 text-sand/75">
        Escolha uma resposta na lista para visualizar o conteúdo detalhado aqui.
      </p>
    </template>
  </article>
</template>
