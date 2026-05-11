<script setup lang="ts">
import { ref } from 'vue';

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const promotionsUrl = 'https://start.bet.br/promotions';
const sportsUrl = 'https://start.bet.br/sportsbook/Football/Brazil';
const liveSportsUrl = 'https://start.bet.br/live/Football';
const casinoUrl = 'https://start.bet.br/casino';
const liveCasinoUrl = 'https://start.bet.br/live-casino';
const loginUrl = 'https://start.bet.br/live-casino?cmd=signin&path=loginMultichannel';
const signupUrl = 'https://start.bet.br/signup';
const extraNavItems = [
  { label: 'Blog', href: 'https://startbetblog.com/' },
  {
    label: 'Club Start',
    href: 'https://start.bet.br/casino?cmd=signin&withRedirect=%2Faccount%2Fachievements&path=loginMultichannel',
  },
];

const navItems = [
  { label: 'Esporte', href: sportsUrl, icon: 'sports' },
  { label: 'Ao Vivo', href: liveSportsUrl, icon: 'live' },
  { label: 'Cassino', href: casinoUrl, icon: 'casino' },
  { label: 'Cassino ao vivo', href: liveCasinoUrl, icon: 'live-casino' },
];

const shortcutItems = [
  { label: 'Entrar', href: loginUrl, icon: 'login' },
  { label: 'Cadastrar', href: signupUrl, icon: 'user' },
];

const mobileNav = ref<HTMLElement | null>(null);
const canScrollBack = ref(false);
const canScrollForward = ref(true);
const isDesktopMenuOpen = ref(false);

const sideMenuItems = [
  ...navItems,
  { label: 'Promoções', href: promotionsUrl, icon: 'gift' },
  { ...extraNavItems[0], icon: 'blog' },
  { ...extraNavItems[1], icon: 'club' },
];

const updateMobileNavScrollState = () => {
  const nav = mobileNav.value;

  if (!nav) {
    return;
  }

  canScrollBack.value = nav.scrollLeft > 8;
  canScrollForward.value = nav.scrollLeft + nav.clientWidth < nav.scrollWidth - 8;
};

const scrollMobileNav = (direction: 'back' | 'forward') => {
  mobileNav.value?.scrollBy({
    left: Math.max(220, window.innerWidth * 0.6) * (direction === 'forward' ? 1 : -1),
    behavior: 'smooth',
  });
};

const closeDesktopMenu = () => {
  isDesktopMenuOpen.value = false;
};
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[#7fdd24]/20 bg-[#270644] text-[#f5f0de] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
    <div class="lg:hidden">
      <div class="flex min-h-[64px] items-center justify-between gap-4 px-4 py-3">
        <a
          :href="sportsUrl"
          target="_blank"
          rel="noreferrer"
          class="flex h-11 w-16 shrink-0 items-center justify-center rounded-md focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/25"
          aria-label="Ir para o site principal da StartBet"
        >
          <svg
            class="h-9 w-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 46"
            fill="none"
            role="img"
            aria-label="Start"
          >
            <path d="M45.8415 16.6919H13.0977V11.8322H54.5025V0H11.8303C5.28152 0 0 5.28226 0 11.8322V16.6919C0 23.2418 5.28152 28.5241 11.8303 28.5241H44.5737V33.3837H3.16894V45.2159H45.8415C52.3902 45.2159 57.6714 39.9337 57.6714 33.3837V28.5241C57.6714 21.9741 52.3902 16.6919 45.8415 16.6919Z" fill="#F5F0DE" />
            <path d="M79.2187 0H61.0515L83.8662 22.8193L61.0515 45.6384H79.2187L93.5838 31.2709C98.2313 26.6225 98.2313 19.016 93.5838 14.3677L79.2187 0Z" fill="#7FDD24" />
          </svg>
        </a>

        <div class="ml-auto flex items-center gap-2">
          <a
            :href="promotionsUrl"
            target="_blank"
            rel="noreferrer"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#7fdd24]/25 bg-[#3f136d] text-[#7fdd24] transition hover:border-[#7fdd24] hover:bg-[#51238c] focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/20"
            aria-label="Ir para promoções"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 12v10H4V12" />
              <path d="M2 7h20v5H2z" />
              <path d="M12 22V7" />
              <path d="M12 7H7.5a2.5 2.5 0 1 1 2.1-3.86C10.7 4.82 12 7 12 7Z" />
              <path d="M12 7h4.5a2.5 2.5 0 1 0-2.1-3.86C13.3 4.82 12 7 12 7Z" />
            </svg>
          </a>

          <a
            :href="extraNavItems[0].href"
            target="_blank"
            rel="noreferrer"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#7fdd24]/25 bg-[#3f136d] text-[#f5f0de] transition hover:border-[#7fdd24] hover:bg-[#51238c] hover:text-[#7fdd24] focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/20"
            aria-label="Ir para o blog"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 19.5V4a2 2 0 0 1 2-2h12v20H6a2 2 0 0 1-2-2.5Z" />
              <path d="M8 7h6" />
              <path d="M8 11h7" />
              <path d="M8 15h4" />
            </svg>
          </a>
        </div>
      </div>

      <div class="relative border-t border-[#51238c]">
        <nav
          ref="mobileNav"
          class="flex items-center gap-3 overflow-x-auto px-4 py-3 pr-20 text-[15px] font-black text-[#f5f0de] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          @scroll="updateMobileNavScrollState"
        >
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="inline-flex shrink-0 items-center gap-2 rounded-md px-1 transition hover:text-[#7fdd24] focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/20"
          >
            <span class="flex h-5 w-5 shrink-0 items-center justify-center text-[#7fdd24]" aria-hidden="true">
              <svg v-if="item.icon === 'sports'" class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 4 4 4 4-4" />
                <path d="m8 20 4-4 4 4" />
                <path d="M3 12h6" />
                <path d="M15 12h6" />
              </svg>
              <svg v-else-if="item.icon === 'live'" class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="m13 2-8 12h7l-1 8 8-12h-7z" />
              </svg>
              <svg v-else-if="item.icon === 'casino'" class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="5" width="12" height="16" rx="2" transform="rotate(-8 4 5)" />
                <path d="M10 10h.01" />
                <path d="M12 15h.01" />
                <path d="M16 8h.01" />
              </svg>
              <svg v-else class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M8 13h8" />
                <path d="M12 9v8" />
                <path d="m8 9 4 4 4-4" />
              </svg>
            </span>
            <span>{{ item.label }}</span>
          </a>
        </nav>
        <button
          v-if="canScrollBack"
          type="button"
          class="absolute inset-y-0 left-0 flex w-16 items-center justify-start bg-gradient-to-r from-[#270644] via-[#270644]/95 to-transparent pl-3 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#7fdd24]/20"
          aria-label="Ver itens anteriores do menu"
          @click="scrollMobileNav('back')"
        >
          <span class="flex h-8 w-8 items-center justify-center rounded-full border border-[#7fdd24]/45 bg-[#3f136d] text-[#7fdd24] shadow-[0_0_18px_rgba(127,221,36,0.25)]">
            <svg class="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </span>
        </button>
        <button
          v-if="canScrollForward"
          type="button"
          class="absolute inset-y-0 right-0 flex w-16 items-center justify-end bg-gradient-to-l from-[#270644] via-[#270644]/95 to-transparent pr-3 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#7fdd24]/20"
          aria-label="Ver mais itens do menu"
          @click="scrollMobileNav('forward')"
        >
          <span class="flex h-8 w-8 items-center justify-center rounded-full border border-[#7fdd24]/45 bg-[#3f136d] text-[#7fdd24] shadow-[0_0_18px_rgba(127,221,36,0.25)]">
            <svg class="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>
      </div>

      <div class="grid grid-cols-2 gap-2 border-t border-[#51238c] bg-[#3f136d] px-4 py-2">
        <a
          v-for="item in shortcutItems"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-9 min-w-0 items-center justify-center gap-1.5 rounded-full border border-[#7fdd24]/35 bg-[#270644] px-3 text-xs font-black text-[#f5f0de] transition hover:border-[#7fdd24] hover:text-[#7fdd24] focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/20"
        >
          <svg v-if="item.icon === 'login'" class="h-3.5 w-3.5 shrink-0 text-[#7fdd24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <path d="m10 17 5-5-5-5" />
            <path d="M15 12H3" />
          </svg>
          <svg v-else class="h-3.5 w-3.5 shrink-0 text-[#f5f0de]/85" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
            <circle cx="12" cy="7" r="4" />
            <path d="M20 8v6" />
            <path d="M23 11h-6" />
          </svg>
          <span class="truncate">{{ item.label }}</span>
        </a>
      </div>
    </div>

    <div class="mx-auto hidden min-h-[74px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-8 px-8 py-3 lg:grid">
      <div class="flex min-w-0 items-center gap-5">
        <button
          type="button"
          class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-[#7fdd24] transition hover:bg-[#3f136d] focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/20"
          aria-label="Abrir menu principal"
          :aria-expanded="isDesktopMenuOpen"
          @click="isDesktopMenuOpen = true"
        >
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>

      <a
        :href="sportsUrl"
        target="_blank"
        rel="noreferrer"
        class="flex shrink-0 items-center rounded-md focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/25"
        aria-label="Ir para o site principal da StartBet"
      >
        <img
          :src="assetUrl('brand/startbet-logo.png')"
          alt="StartBet"
          class="h-10 w-auto"
        />
      </a>
      </div>

      <a
        :href="promotionsUrl"
        target="_blank"
        rel="noreferrer"
        class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f5f0de] px-6 text-sm font-black uppercase text-[#51238c] transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/25"
      >
        <svg class="h-5 w-5 text-[#7fdd24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7H7.5a2.5 2.5 0 1 1 2.1-3.86C10.7 4.82 12 7 12 7Z" />
          <path d="M12 7h4.5a2.5 2.5 0 1 0-2.1-3.86C13.3 4.82 12 7 12 7Z" />
        </svg>
        Promoções
      </a>

      <div class="ml-auto flex shrink-0 items-center gap-3">
        <a
          :href="loginUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f5f0de] px-6 text-base font-extrabold text-[#51238c] transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/20"
        >
          Entrar
        </a>

        <a
          :href="signupUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex min-h-12 items-center justify-center rounded-full bg-[#7fdd24] px-6 text-base font-extrabold text-[#51238c] transition hover:bg-[#8dff1f] focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/25"
        >
          Cadastrar
        </a>
      </div>
    </div>

    <div v-if="isDesktopMenuOpen" class="fixed inset-0 z-[60] hidden lg:block" role="dialog" aria-modal="true" aria-label="Menu principal">
      <button
        type="button"
        class="absolute inset-0 h-full w-full bg-black/45"
        aria-label="Fechar menu"
        @click="closeDesktopMenu"
      />

      <aside class="relative flex h-full min-h-0 w-full max-w-[300px] flex-col bg-[#270644] px-6 py-5 shadow-panel">
        <div class="flex items-center justify-between gap-4">
          <img
            :src="assetUrl('brand/startbet-logo.png')"
            alt="StartBet"
            class="h-9 w-auto"
          />
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#7fdd24] transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/20"
            aria-label="Fechar menu"
            @click="closeDesktopMenu"
          >
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <nav class="mt-8 grid min-h-0 flex-1 content-start gap-4 overflow-y-auto pb-4 pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a
            v-for="item in sideMenuItems"
            :key="item.label"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="group flex min-h-11 items-center gap-4 rounded-md px-0 py-1 text-lg font-extrabold text-white transition hover:text-[#7fdd24] focus:outline-none focus:ring-4 focus:ring-[#7fdd24]/20"
            @click="closeDesktopMenu"
          >
            <span class="flex h-9 w-9 shrink-0 items-center justify-center text-white transition group-hover:text-[#7fdd24]">
              <svg v-if="item.icon === 'sports'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 4 4 4 4-4" />
                <path d="m8 20 4-4 4 4" />
                <path d="M3 12h6" />
                <path d="M15 12h6" />
              </svg>
              <svg v-else-if="item.icon === 'live'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m13 2-8 12h7l-1 8 8-12h-7z" />
              </svg>
              <svg v-else-if="item.icon === 'casino'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="4" y="5" width="12" height="16" rx="2" transform="rotate(-8 4 5)" />
                <path d="M10 10h.01" />
                <path d="M12 15h.01" />
                <path d="M16 8h.01" />
              </svg>
              <svg v-else-if="item.icon === 'live-casino'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M8 13h8" />
                <path d="M12 9v8" />
                <path d="m8 9 4 4 4-4" />
              </svg>
              <svg v-else-if="item.icon === 'gift'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 12v10H4V12" />
                <path d="M2 7h20v5H2z" />
                <path d="M12 22V7" />
                <path d="M12 7H7.5a2.5 2.5 0 1 1 2.1-3.86C10.7 4.82 12 7 12 7Z" />
                <path d="M12 7h4.5a2.5 2.5 0 1 0-2.1-3.86C13.3 4.82 12 7 12 7Z" />
              </svg>
              <svg v-else-if="item.icon === 'blog'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 19.5V4a2 2 0 0 1 2-2h12v20H6a2 2 0 0 1-2-2.5Z" />
                <path d="M8 7h6" />
                <path d="M8 11h7" />
                <path d="M8 15h4" />
              </svg>
              <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
                <path d="M5 6H3a3 3 0 0 0 3 3h1" />
                <path d="M19 6h2a3 3 0 0 1-3 3h-1" />
              </svg>
            </span>
            <span>{{ item.label }}</span>
          </a>
        </nav>

        <div class="mt-6 shrink-0 rounded-md border border-[#7fdd24]/20 bg-[#3f136d] p-4">
          <p class="text-xs font-black uppercase tracking-[0.16em] text-[#7fdd24]">StartBet</p>
          <p class="mt-2 text-sm font-semibold leading-6 text-[#f5f0de]/80">
            Continue navegando pelo site principal, promoções, cassino e Club Start.
          </p>
        </div>
      </aside>
    </div>
  </header>
</template>
