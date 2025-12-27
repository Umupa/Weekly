import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/**
 * 获取所有文章（按日期降序）
 */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * 从文件名提取期号
 * @example "001-创刊号" -> 1
 */
export function getIssueNumber(id: string): number {
  const match = id.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

/**
 * 格式化日期
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * 估算阅读时间（按中文 300 字/分钟）
 */
export function getReadingTime(content: string): number {
  const words = content.length;
  return Math.ceil(words / 300);
}
