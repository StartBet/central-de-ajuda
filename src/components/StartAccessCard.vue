<script setup lang="ts">
const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const accessCards = [
  {
    title: 'SportsBook',
    eyebrow: 'Esportes',
    description: 'Acompanhe mercados ao vivo, odds competitivas e grandes jogos em poucos cliques.',
    href: 'https://start.bet.br/sportsbook/Football/Brazil',
    image: 'brand/cta-sportsbook.png',
  },
  {
    title: 'Cassino',
    eyebrow: 'Jogos online',
    description: 'Explore slots, roleta, cartas e experiências de cassino com navegação simples.',
    href: 'https://start.bet.br/casino',
    image: 'brand/cta-casino.png',
  },
];
</script>

<template>
  <section aria-labelledby="start-access-title" class="mt-8">
    <div class="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-sm font-black uppercase tracking-[0.16em] text-[#7fdd24]">Continue jogando</p>
        <h2 id="start-access-title" class="font-display mt-1 text-3xl font-black tracking-normal text-[#f5f0de] sm:text-4xl">
          Escolha seu destino
        </h2>
      </div>
      <p class="max-w-xl text-sm font-semibold leading-6 text-[#f5f0de]/75">
        Vá direto para esportes ou cassino e continue sua experiência no site oficial da StartBet.
      </p>
    </div>

    <div class="grid gap-5 lg:grid-cols-2">
      <a
        v-for="card in accessCards"
        :key="card.title"
        :href="card.href"
        target="_blank"
        rel="noreferrer"
        class="group relative min-h-[230px] overflow-hidden rounded-lg bg-[#3f136d] shadow-panel transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/25"
      >
        <img
          :src="assetUrl(card.image)"
          :alt="card.title"
          class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#270644] via-[#270644]/80 to-[#270644]/10" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#270644]/55 via-transparent to-transparent" />

        <div class="relative flex min-h-[230px] max-w-[360px] flex-col justify-between p-5 sm:p-7">
          <div>
            <span class="inline-flex rounded-full bg-[#7fdd24] px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#270644]">
              {{ card.eyebrow }}
            </span>
            <h3 class="font-display mt-4 text-4xl font-black uppercase leading-none tracking-normal text-[#f5f0de] [text-shadow:2px_2px_0_#270644] sm:text-5xl">
              {{ card.title }}
            </h3>
            <p class="mt-3 text-sm font-semibold leading-6 text-[#f5f0de]/80">
              {{ card.description }}
            </p>
          </div>

          <span class="mt-5 inline-flex h-11 w-fit items-center gap-2 rounded-md bg-[#7fdd24] px-4 text-sm font-black uppercase text-[#270644] transition group-hover:bg-[#9dff36]">
            Quero jogar
            <svg
              class="h-5 w-5 transition group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  </section>
</template>
