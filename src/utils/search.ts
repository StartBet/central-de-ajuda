import type { HelpArticle } from '../types/help-center';

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export const searchArticles = (articles: HelpArticle[], query: string) => {
  const term = normalize(query.trim());

  if (!term) {
    return articles;
  }

  return articles.filter((article) => {
    const searchable = normalize(
      [article.title, article.excerpt, article.tags.join(' '), article.content.join(' ')].join(' '),
    );

    return searchable.includes(term);
  });
};
