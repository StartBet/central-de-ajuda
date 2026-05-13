<script setup lang="ts">
import { ref } from 'vue';

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const carousel = ref<HTMLElement | null>(null);

const scrollCards = (direction: 'previous' | 'next') => {
  const element = carousel.value;

  if (!element) {
    return;
  }

  element.scrollBy({
    left: Math.min(420, element.clientWidth * 0.86) * (direction === 'next' ? 1 : -1),
    behavior: 'smooth',
  });
};

const cards = [
  {
    title: 'Odds competitivas',
    description: 'Mercados ao vivo, pré-jogo e seleções populares com leitura rápida para comparar oportunidades.',
    image: 'brand/why-odds-opportunities.png',
    badge: 'Ao vivo',
    badgeValue: 'Odds em destaque',
    feature: 'Mercados esportivos',
    metrics: [
      { label: 'Futebol', value: '+250' },
      { label: 'Ao vivo', value: '+80' },
      { label: 'Especiais', value: '+40' },
    ],
    highlights: ['Pré-jogo', 'Ao vivo', 'Favoritos'],
  },
  {
    title: 'Saques rápidos',
    description: 'Acompanhe cada etapa do saque com validações claras e envio para a chave PIX cadastrada.',
    image: 'brand/why-fast-withdrawals.png',
    badge: 'PIX',
    badgeValue: 'Fluxo simples',
    feature: 'Carteira organizada',
    metrics: [
      { label: 'Solicitar', value: '01' },
      { label: 'Validar', value: '02' },
      { label: 'Receber', value: '03' },
    ],
    highlights: ['Status visível', 'Menos atrito', 'Histórico'],
  },
  {
    title: 'Promoções frequentes',
    description: 'Campanhas, bônus e ações recorrentes para aproveitar mais possibilidades dentro da plataforma.',
    image: 'brand/why-promotions-bonuses.png',
    badge: 'Bonus',
    badgeValue: 'Campanhas ativas',
    feature: 'Mais oportunidades',
    metrics: [
      { label: 'Novos', value: 'On' },
      { label: 'Ativos', value: 'VIP' },
      { label: 'Missões', value: '+' },
    ],
    highlights: ['Regras claras', 'Ativação fácil', 'Recorrência'],
  },
  {
    title: 'Fácil de usar',
    description: 'Navegação direta no celular e no computador, com atalhos para conta, carteira e jogos.',
    image: 'brand/why-modern-platform.png',
    badge: 'Mobile',
    badgeValue: 'Acesso rápido',
    feature: 'Experiência fluida',
    metrics: [
      { label: 'Conta', value: '1 tap' },
      { label: 'Carteira', value: 'PIX' },
      { label: 'Jogos', value: '24h' },
    ],
    highlights: ['Menu simples', 'Busca rápida', 'Responsivo'],
  },
  {
    title: 'Segurança e suporte',
    description: 'Proteção da conta, validação de identidade e canais de atendimento para resolver com clareza.',
    image: 'brand/why-security-support.png',
    badge: 'Suporte',
    badgeValue: 'Canais oficiais',
    feature: 'Conta protegida',
    metrics: [
      { label: 'Conta', value: 'KYC' },
      { label: 'Ajuda', value: 'Chat' },
      { label: 'Jogo', value: '18+' },
    ],
    highlights: ['Validação', 'Ouvidoria', 'Ajuda'],
  },
];
</script>

<template>
  <section class="rounded-lg bg-midnight p-4 sm:p-5" aria-labelledby="why-startbet-title">
    <div class="mb-5 flex items-center gap-3">
      <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold text-midnight">
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
          <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
        </svg>
      </span>
      <h2 id="why-startbet-title" class="font-display text-2xl font-black tracking-normal text-sand sm:text-3xl">
        Por que apostar na StartBet?
      </h2>
    </div>

    <div class="mb-3 flex items-center justify-end gap-2 text-xs font-black uppercase tracking-[0.12em] text-gold-soft sm:hidden">
      <span>Arraste para ver mais</span>
      <svg class="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </div>

    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-midnight to-transparent" />
      <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-midnight to-transparent" />

      <button
        type="button"
        class="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/35 bg-midnight-3 text-gold shadow-panel transition hover:border-gold hover:bg-grape hover:text-gold-soft focus:outline-none focus:ring-4 focus:ring-gold/20 sm:flex"
        aria-label="Ver cards anteriores"
        @click="scrollCards('previous')"
      >
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        class="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/35 bg-midnight-3 text-gold shadow-panel transition hover:border-gold hover:bg-grape hover:text-gold-soft focus:outline-none focus:ring-4 focus:ring-gold/20"
        aria-label="Ver próximos cards"
        @click="scrollCards('next')"
      >
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div
        ref="carousel"
        class="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 pr-14 [scrollbar-width:none] sm:gap-6 sm:px-14 sm:pb-2 [&::-webkit-scrollbar]:hidden"
      >
        <article
          v-for="card in cards"
          :key="card.title"
          class="group w-[86vw] max-w-[390px] shrink-0 snap-start overflow-hidden rounded-lg border border-gold/10 bg-midnight-2 shadow-[0_18px_38px_rgba(0,0,0,0.34),0_1px_0_rgba(255,255,255,0.08)_inset] transition hover:-translate-y-0.5 hover:border-gold/30 hover:bg-midnight-3 hover:shadow-[0_24px_48px_rgba(0,0,0,0.42),0_1px_0_rgba(255,255,255,0.1)_inset] sm:w-[380px] lg:w-[410px]"
        >
          <div class="relative aspect-[16/10] overflow-hidden bg-midnight">
            <img
              :src="assetUrl(card.image)"
              :alt="card.title"
              class="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight-2 via-midnight/15 to-black/25" />
            <div class="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
              <span class="inline-flex min-w-0 items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-xs font-black text-midnight">
                <svg class="h-3.5 w-3.5 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M22 11h-4" />
                  <path d="M20 9v4" />
                </svg>
                <span class="truncate">{{ card.badge }}</span>
              </span>
              <span class="rounded-full bg-midnight-3 px-3 py-1 text-xs font-black text-sand">
                {{ card.badgeValue }}
              </span>
            </div>
          </div>

          <div class="border-t border-gold/10 p-4">
            <div class="mb-3 flex items-center justify-between gap-3">
              <h3 class="text-base font-black leading-6 text-sand">{{ card.title }}</h3>
              <span class="shrink-0 text-right text-xs font-black text-gold sm:max-w-20">{{ card.feature }}</span>
            </div>

            <div class="grid grid-cols-3 gap-2 rounded-lg bg-midnight p-3">
              <div v-for="metric in card.metrics" :key="metric.label" class="min-w-0">
                <p class="truncate text-sm font-black text-white">{{ metric.value }}</p>
                <p class="mt-1 truncate text-[11px] font-bold text-sand/65">{{ metric.label }}</p>
              </div>
            </div>

            <p class="mt-3 min-h-16 text-sm font-semibold leading-5 text-sand/75">{{ card.description }}</p>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="highlight in card.highlights"
                :key="highlight"
                class="rounded-full border border-gold/20 bg-midnight px-2.5 py-1 text-[11px] font-black text-gold-soft"
              >
                {{ highlight }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
