<script setup lang="ts">
const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const cards = [
  {
    title: 'Odds competitivas',
    description: 'Grandes oportunidades em esportes e cassino, com mercados para diferentes perfis de jogador.',
    image: 'brand/why-odds-opportunities.png',
  },
  {
    title: 'Saques rápidos',
    description: 'Fluxo simples, plataforma estável e menos atrito para jogar sem dor de cabeça.',
    image: 'brand/why-fast-withdrawals.png',
  },
  {
    title: 'Promoções frequentes',
    description: 'Bônus e campanhas para novos e antigos jogadores aproveitarem mais possibilidades.',
    image: 'brand/why-promotions-bonuses.png',
  },
  {
    title: 'Fácil de usar',
    description: 'Experiência moderna no celular e no computador, com navegação direta e intuitiva.',
    image: 'brand/why-modern-platform.png',
  },
  {
    title: 'Segurança e suporte',
    description: 'Proteção da conta e atendimento dedicado para garantir uma experiência mais tranquila.',
    image: 'brand/why-security-support.png',
  },
];
</script>

<template>
  <section class="rounded-lg bg-[#270644] p-4 sm:p-5" aria-labelledby="why-startbet-title">
    <div class="mb-5 flex items-center gap-3">
      <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#7fdd24] text-[#270644]">
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
      <h2 id="why-startbet-title" class="font-display text-2xl font-black tracking-normal text-[#f5f0de] sm:text-3xl">
        Por que apostar na StartBet?
      </h2>
    </div>

    <div class="mb-3 flex items-center justify-end gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#b8ef7d] sm:hidden">
      <span>Arraste para ver mais</span>
      <svg class="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </div>

    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#270644] to-transparent sm:hidden" />
      <div class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-10 [scrollbar-width:none] sm:grid sm:overflow-visible sm:pb-0 sm:pr-0 sm:snap-none sm:grid-cols-2 xl:grid-cols-5 [&::-webkit-scrollbar]:hidden">
      <article
        v-for="card in cards"
        :key="card.title"
        class="group w-[78vw] max-w-[300px] shrink-0 snap-start overflow-hidden rounded-lg border border-[#7fdd24]/10 bg-[#3f136d] shadow-[0_18px_38px_rgba(0,0,0,0.34),0_1px_0_rgba(255,255,255,0.08)_inset] transition hover:-translate-y-0.5 hover:border-[#7fdd24]/30 hover:bg-[#51238c] hover:shadow-[0_24px_48px_rgba(0,0,0,0.42),0_1px_0_rgba(255,255,255,0.1)_inset] sm:w-auto sm:max-w-none"
      >
        <div class="relative aspect-[4/3] overflow-hidden bg-[#270644]">
          <img
            :src="assetUrl(card.image)"
            :alt="card.title"
            class="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
          />
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3f136d]/65 via-transparent to-transparent" />
        </div>

        <div class="p-4">
          <h3 class="text-base font-black leading-6 text-[#f5f0de]">{{ card.title }}</h3>
          <p class="mt-2 text-sm font-semibold leading-5 text-[#f5f0de]/75">{{ card.description }}</p>
        </div>
      </article>
      </div>
    </div>
  </section>
</template>
