<script setup lang="ts">
import { ref } from 'vue';

declare global {
  interface Window {
    zE?: (...args: unknown[]) => void;
  }
}

const zendeskSnippetId = 'ze-snippet';
const zendeskSnippetUrl =
  'https://static.zdassets.com/ekr/snippet.js?key=05f7e9c0-797b-4df7-9b07-5d976d554662';

const isChatLoading = ref(false);

let isZendeskCloseHandlerRegistered = false;

const hideZendeskMessenger = () => {
  window.zE?.('messenger', 'hide');
};

const registerZendeskCloseHandler = () => {
  if (!window.zE || isZendeskCloseHandlerRegistered) {
    return;
  }

  window.zE('messenger:on', 'close', hideZendeskMessenger);
  isZendeskCloseHandlerRegistered = true;
};

const showAndOpenZendeskMessenger = () => {
  registerZendeskCloseHandler();
  window.zE?.('messenger', 'show');
  window.zE?.('messenger', 'open');
  isChatLoading.value = false;
};

const openZendeskChat = () => {
  if (window.zE) {
    showAndOpenZendeskMessenger();
    return;
  }

  const existingSnippet = document.getElementById(zendeskSnippetId);

  isChatLoading.value = true;

  if (existingSnippet) {
    existingSnippet.addEventListener('load', () => {
      showAndOpenZendeskMessenger();
    }, { once: true });
    return;
  }

  const snippet = document.createElement('script');
  snippet.id = zendeskSnippetId;
  snippet.src = zendeskSnippetUrl;
  snippet.async = true;
  snippet.addEventListener('load', () => {
    showAndOpenZendeskMessenger();
  });
  snippet.addEventListener('error', () => {
    isChatLoading.value = false;
  });
  document.head.appendChild(snippet);
};
</script>

<template>
  <footer class="border-t border-gold/15 bg-midnight-2">
    <section class="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-10">
      <div class="rounded-lg border border-gold/15 bg-midnight p-5 shadow-panel sm:p-7">
        <div class="flex items-center gap-3 border-b border-gold/15 pb-5">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-midnight-3 text-gold" aria-hidden="true">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8h.01" />
              <path d="M11 12h1v4h1" />
            </svg>
          </span>
          <div>
            <p class="text-xs font-black uppercase tracking-[0.16em] text-gold-soft">Suporte StartBet</p>
            <h2 class="font-display mt-1 text-2xl font-black uppercase tracking-normal text-sand sm:text-3xl">
              Ainda ficou d&uacute;vida?
            </h2>
          </div>
        </div>

        <div class="grid gap-6 pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div class="grid gap-5 sm:grid-cols-2">
            <div class="flex gap-3">
              <span class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center text-gold" aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.32 1.8.59 2.65a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6.27 6.27l1.25-1.25a2 2 0 0 1 2.11-.45c.85.27 1.74.47 2.65.59A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <div>
                <p class="text-sm font-bold text-sand/55">Ouvidoria</p>
                <a href="tel:08000330396" class="text-base font-black text-gold transition hover:text-gold-soft">
                  0800 033 0396
                </a>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center text-gold" aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
              </span>
              <div>
                <p class="text-sm font-bold text-sand/55">Central de Ajuda</p>
                <a href="tel:08008882444" class="text-base font-black text-gold transition hover:text-gold-soft">
                  0800 888 2444
                </a>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center text-gold" aria-hidden="true">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="m10 14 11-11" />
                </svg>
              </span>
              <div>
                <p class="text-sm font-bold text-sand/55">Reclame Aqui</p>
                <a
                  href="https://www.reclameaqui.com.br/empresa/startbet/"
                  target="_blank"
                  rel="noreferrer"
                  class="text-base font-black text-gold transition hover:text-gold-soft"
                >
                  Ver perfil da StartBet
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-gold bg-gold px-6 text-sm font-black uppercase text-midnight transition hover:bg-gold-soft focus:outline-none focus:ring-4 focus:ring-gold/20 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            :disabled="isChatLoading"
            @click="openZendeskChat"
          >
            <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
            {{ isChatLoading ? 'Abrindo...' : 'Abrir chat' }}
          </button>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
      <div class="overflow-hidden rounded-b-[32px] rounded-t-none bg-[#f5f0de] shadow-panel md:flex md:items-stretch">
        <div class="flex min-w-0 flex-1 items-center px-5 py-5 sm:px-8">
          <p class="text-sm font-extrabold leading-5 text-[#270644]">
            Aposte com Responsabilidade. Autoriza&ccedil;&atilde;o SPA/MF N&ordm; 527 de 2025.
            Aposta n&atilde;o &eacute; investimento e pode causar depend&ecirc;ncia. Ganhos passados
            n&atilde;o garantem ganhos futuros. Proibido para menores de 18 anos.
          </p>
        </div>

        <div class="flex items-center justify-center gap-5 bg-[#f5f0de] px-5 pb-5 md:px-7 md:py-0">
          <div class="relative flex h-[86px] w-[113px] shrink-0 items-center justify-center" aria-label="18 anos ou mais">
            <svg
              class="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 113 86"
              fill="none"
              aria-hidden="true"
            >
              <path d="M98.4423 0H13.9424C6.12616 0 0 6.12733 0 13.7337V17.9595H2.32376V13.7337C2.32376 7.39507 7.60491 2.32411 13.9424 2.32411H98.4423C104.78 2.32411 110.061 7.39507 110.061 13.7337V17.9595H112.385V13.7337C112.385 6.12733 106.047 0 98.4423 0Z" fill="#51238C" />
              <path d="M110.061 71.8382C110.061 78.1769 104.78 83.2478 98.4423 83.2478H13.9424C7.60491 83.2478 2.32376 78.1769 2.32376 71.8382V66.1334H0V71.8382C0 79.4446 6.33741 85.572 13.9424 85.572H98.4423C106.259 85.572 112.385 79.4446 112.385 71.8382V66.1334H110.061V71.8382Z" fill="#51238C" />
            </svg>
            <span class="absolute left-4 top-6 text-2xl font-black leading-none text-[#51238c]">+</span>
            <span class="text-5xl font-black leading-none text-[#51238c]">18</span>
            <span class="absolute right-4 top-6 text-4xl font-black leading-none text-[#51238c]">&rsaquo;</span>
          </div>
        </div>

        <div class="flex min-h-24 items-center justify-center bg-[#270644] px-8 md:w-40">
          <svg
            class="h-12 w-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 46"
            fill="none"
            role="img"
            aria-label="Start"
          >
            <path d="M45.8415 16.6919H13.0977V11.8322H54.5025V0H11.8303C5.28152 0 0 5.28226 0 11.8322V16.6919C0 23.2418 5.28152 28.5241 11.8303 28.5241H44.5737V33.3837H3.16894V45.2159H45.8415C52.3902 45.2159 57.6714 39.9337 57.6714 33.3837V28.5241C57.6714 21.9741 52.3902 16.6919 45.8415 16.6919Z" fill="#F5F0DE" />
            <path d="M79.2187 0H61.0515L83.8662 22.8193L61.0515 45.6384H79.2187L93.5838 31.2709C98.2313 26.6225 98.2313 19.016 93.5838 14.3677L79.2187 0Z" fill="#7FDD24" />
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>
