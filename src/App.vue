<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import ArticleList from './components/ArticleList.vue';
import ArticleViewer from './components/ArticleViewer.vue';
import CategoryGrid from './components/CategoryGrid.vue';
import FaqAccordion from './components/FaqAccordion.vue';
import HelpHeader from './components/HelpHeader.vue';
import SidebarNav from './components/SidebarNav.vue';
import SiteHeader from './components/SiteHeader.vue';
import StartAccessCard from './components/StartAccessCard.vue';
import SupportCta from './components/SupportCta.vue';
import { articles, categories, faqs } from './data/helpContent';
import { searchArticles } from './utils/search';

const query = ref('');
const selectedCategoryId = ref(categories[0]?.id ?? '');
const selectedArticleId = ref(articles[0]?.id ?? '');

const selectedCategory = computed(() =>
  categories.find((category) => category.id === selectedCategoryId.value),
);

const filteredArticles = computed(() => {
  const categoryArticles = articles.filter((article) => article.categoryId === selectedCategoryId.value);
  return searchArticles(categoryArticles, query.value);
});

const selectedArticle = computed(() =>
  filteredArticles.value.find((article) => article.id === selectedArticleId.value),
);

const filteredFaqs = computed(() => faqs.filter((faq) => faq.categoryId === selectedCategoryId.value));

const allSearchResultCount = computed(() => searchArticles(articles, query.value).length);

const searchResults = computed(() => searchArticles(articles, query.value));

const selectCategory = (categoryId: string) => {
  selectedCategoryId.value = categoryId;
};

const selectSearchResult = (articleId: string, categoryId: string) => {
  selectedCategoryId.value = categoryId;
  selectedArticleId.value = articleId;
};

watch(
  filteredArticles,
  (items) => {
    if (!items.some((article) => article.id === selectedArticleId.value)) {
      selectedArticleId.value = items[0]?.id ?? '';
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="min-h-screen bg-midnight text-ink">
    <SiteHeader />

    <HelpHeader
      v-model:query="query"
      :result-count="allSearchResultCount"
      :results="searchResults"
      :categories="categories"
      @select="selectSearchResult($event.id, $event.categoryId)"
    />

    <main class="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <CategoryGrid
        :categories="categories"
        :selected-category-id="selectedCategoryId"
        @select="selectCategory"
      />

      <StartAccessCard />

      <div class="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
        <SidebarNav
          :categories="categories"
          :selected-category-id="selectedCategoryId"
          @select="selectCategory"
        />

        <div class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
          <ArticleList
            :articles="filteredArticles"
            :selected-article-id="selectedArticleId"
            @select="selectedArticleId = $event"
          />
          <ArticleViewer :article="selectedArticle" :category="selectedCategory" />
        </div>
      </div>

      <div class="mt-10">
        <FaqAccordion :faqs="filteredFaqs" />
      </div>
    </main>

    <SupportCta />
  </div>
</template>
