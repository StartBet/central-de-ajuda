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

const openZendeskChat = () => {
  if (window.zE) {
    window.zE('messenger', 'open');
    return;
  }

  const existingSnippet = document.getElementById(zendeskSnippetId);

  isChatLoading.value = true;

  if (existingSnippet) {
    existingSnippet.addEventListener('load', () => {
      window.zE?.('messenger', 'open');
      isChatLoading.value = false;
    }, { once: true });
    return;
  }

  const snippet = document.createElement('script');
  snippet.id = zendeskSnippetId;
  snippet.src = zendeskSnippetUrl;
  snippet.async = true;
  snippet.addEventListener('load', () => {
    window.zE?.('messenger', 'open');
    isChatLoading.value = false;
  });
  snippet.addEventListener('error', () => {
    isChatLoading.value = false;
  });
  document.head.appendChild(snippet);
};
</script>

<template>
  <footer class="border-t border-gold/15 bg-midnight-2">
    <section class="mx-auto max-w-xl px-5 py-14 text-center">
      <p class="text-sm font-black uppercase tracking-[0.16em] text-gold-soft">Suporte StartBet</p>
      <h2 class="font-display mt-2 text-4xl font-black uppercase tracking-normal text-sand">
        Ainda ficou d&uacute;vida?
      </h2>
      <p class="mt-3 text-base font-semibold leading-7 text-sand/80">
        Fale com a gente. Nosso time ajuda voc&ecirc; a resolver sem complicar.
      </p>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          class="inline-flex h-12 items-center justify-center rounded-xl border border-[#4d217a] bg-[#fea900] px-8 text-sm font-black uppercase text-[#270644] shadow-[inset_0_5px_0_0_#ffd04e,inset_-5px_-5px_0_0_#ef6507] transition hover:translate-y-0.5 hover:bg-[#ffb51f] focus:outline-none focus:ring-4 focus:ring-gold/25"
          :disabled="isChatLoading"
          @click="openZendeskChat"
        >
          {{ isChatLoading ? 'Abrindo...' : 'Abrir chat' }}
        </button>
        <a
          href="#articles-title"
          class="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#51238c] pl-5 pr-6 text-sm font-black uppercase text-sand transition hover:bg-[#6030a0] focus:outline-none focus:ring-4 focus:ring-gold/15"
        >
          <svg
            class="h-10 w-11 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 89 77"
            fill="none"
            aria-hidden="true"
          >
            <g clip-path="url(#clip0_articles_icon)">
              <g filter="url(#filter0_articles_icon)">
                <path d="M40.9408 37.0675L40.3549 38.7745L41.4505 39.0037C42.4611 38.9102 44.8695 38.6213 46.4185 38.2136C48.3547 37.7039 50.6476 36.5827 51.4883 35.8438C52.329 35.1049 55.1059 33.8563 55.59 33.7288C55.9772 33.6269 55.4965 32.7183 55.2077 32.2767L53.1441 32.3023L49.6282 32.7102L46.8513 33.9588L44.2018 35.6915L40.9408 37.0675Z" fill="white" />
                <path d="M40.4357 38.5216L34.1802 32.354C32.8851 31.0772 30.8218 31.0697 29.5728 32.3365C28.3223 33.6048 28.359 35.6678 29.6541 36.9447L45.229 52.3006L40.244 52.2739C39.7313 52.2686 39.2235 52.3739 38.7552 52.5826C38.2869 52.7913 37.8692 53.0986 37.5303 53.4834C37.1915 53.8682 36.9397 54.3215 36.7919 54.8125C36.6442 55.3034 36.604 55.8205 36.6742 56.3283C36.7829 57.142 37.153 57.8983 37.7288 58.4834C38.3045 59.0684 39.0548 59.4506 39.8665 59.5724L50.6807 61.1697C53.1344 61.5328 54.3598 61.7129 55.5331 61.6309C57.3241 61.5076 59.0412 60.9394 60.5357 59.9791C61.5164 59.3498 62.3731 58.481 64.0877 56.7418C67.356 53.4269 68.9901 51.7695 69.7721 49.9367C70.3632 48.5367 70.6535 47.0282 70.6242 45.5088C70.5949 43.9895 70.2466 42.4932 69.6019 41.1171C68.7498 39.2782 67.0492 37.6016 63.6527 34.2528L59.7868 30.4413C58.2586 28.9345 55.8886 28.7301 54.1821 29.9589L53.5761 30.3953C53.3616 30.5541 53.1843 30.7577 53.0566 30.9921C52.9288 31.2264 52.8538 31.4858 52.8366 31.7521C52.8193 32.0184 52.8604 32.2853 52.9569 32.5341C53.0534 32.7829 53.203 33.0077 53.3953 33.1928M40.4327 38.5186L40.8525 37.1898C41.0559 36.5498 41.3849 35.9369 41.9531 35.5863C42.7902 35.0831 43.7715 34.874 44.741 34.9925C45.7105 35.111 46.6126 35.5501 47.3039 36.2401M40.4327 38.5186L44.3431 42.3711L40.4327 38.5186ZM47.3039 36.2401L48.8678 37.782L47.3039 36.2401ZM47.3039 36.2401C46.4425 35.3908 46.418 34.0135 47.2497 33.1699C48.916 31.4798 51.6681 31.4898 53.3953 33.1928M53.3953 33.1928L54.9577 34.7332L53.3953 33.1928Z" fill="white" />
                <path d="M40.4357 38.5216L34.1802 32.354C32.8851 31.0772 30.8218 31.0697 29.5728 32.3365C28.3223 33.6048 28.359 35.6678 29.6541 36.9447L45.229 52.3006L40.244 52.2739C39.7313 52.2686 39.2235 52.3739 38.7552 52.5826C38.2869 52.7913 37.8692 53.0986 37.5303 53.4834C37.1915 53.8682 36.9397 54.3215 36.7919 54.8125C36.6442 55.3034 36.6041 55.8205 36.6742 56.3283C36.7829 57.142 37.153 57.8983 37.7288 58.4834C38.3045 59.0684 39.0548 59.4506 39.8665 59.5724L50.6807 61.1697C53.1344 61.5328 54.3598 61.7129 55.5331 61.6309C57.3241 61.5076 59.0412 60.9394 60.5357 59.9791C61.5164 59.3498 62.3731 58.481 64.0877 56.7418C67.356 53.4269 68.9901 51.7695 69.7721 49.9367C70.3632 48.5367 70.6535 47.0282 70.6242 45.5088C70.5949 43.9895 70.2466 42.4932 69.6019 41.1171C68.7498 39.2782 67.0492 37.6016 63.6527 34.2528L59.7868 30.4413C58.2586 28.9345 55.8886 28.7301 54.1821 29.9589L53.5761 30.3953C53.3616 30.5541 53.1843 30.7577 53.0566 30.9921C52.9288 31.2264 52.8538 31.4858 52.8366 31.7521C52.8193 32.0184 52.8604 32.2853 52.9569 32.5341C53.0534 32.7829 53.203 33.0077 53.3953 33.1928M53.3953 33.1928C51.6681 31.4898 48.916 31.4798 47.2497 33.1699C46.418 34.0135 46.4425 35.3908 47.3039 36.2401M53.3953 33.1928L54.9577 34.7332M47.3039 36.2401C46.6126 35.5501 45.7105 35.111 44.741 34.9925C43.7715 34.874 42.7902 35.0831 41.9531 35.5863C41.3849 35.9369 41.0559 36.5498 40.8525 37.1898L40.4327 38.5186L44.3431 42.3711M47.3039 36.2401L48.8678 37.782" stroke="#1D0533" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <path d="M36.296 28.3661C35.5479 27.6285 34.6709 27.0363 33.7151 26.6233C32.7593 26.2102 31.7435 25.9844 30.7255 25.9588C29.7075 25.9332 28.7075 26.1082 27.7823 26.4739C26.8572 26.8396 26.0251 27.3888 25.3336 28.0902C24.6421 28.7915 24.1047 29.6313 23.7522 30.5615C23.3996 31.4918 23.2388 32.4942 23.2788 33.5117C23.3188 34.5292 23.559 35.5418 23.9855 36.4916C24.4121 37.4415 25.0167 38.31 25.7648 39.0476" stroke="#1D0533" stroke-width="2" stroke-linecap="round" />
              <path d="M39.4503 24.4546C38.2814 23.3021 36.8969 22.3911 35.376 21.7737C33.855 21.1563 32.2273 20.8445 30.5858 20.8561C28.9443 20.8677 27.3212 21.2025 25.8091 21.8414C24.297 22.4803 22.9256 23.4108 21.7731 24.5798C20.6206 25.7487 19.7097 27.1331 19.0922 28.6541C18.4748 30.1751 18.163 31.8028 18.1746 33.4443C18.1863 35.0858 18.5211 36.7089 19.16 38.221C19.7989 39.7331 20.7294 41.1045 21.8983 42.257" stroke="#1D0533" stroke-width="2" stroke-linecap="round" />
            </g>
            <defs>
              <filter id="filter0_articles_icon" x="27.6583" y="28.158" width="43.9679" height="36.4923" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.152941 0 0 0 0 0.0235294 0 0 0 0 0.266667 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_articles_icon" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_articles_icon" result="shape" />
              </filter>
              <clipPath id="clip0_articles_icon">
                <rect y="39.5417" width="62.458" height="62.458" rx="11" transform="rotate(-45.4058 0 39.5417)" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Ver artigos
        </a>
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

        <div class="flex items-center justify-between gap-5 bg-[#f5f0de] px-5 pb-5 md:justify-center md:px-7 md:py-0">
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
