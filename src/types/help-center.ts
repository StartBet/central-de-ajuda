export type ArticleStatus = 'popular' | 'new' | 'updated';

export interface HelpArticle {
  id: string;
  categoryId: string;
  title: string;
  excerpt: string;
  content: string[];
  tags: string[];
  status?: ArticleStatus;
}

export interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: 'wallet' | 'banknote' | 'user' | 'shield' | 'gift' | 'ticket';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  categoryId: string;
}
