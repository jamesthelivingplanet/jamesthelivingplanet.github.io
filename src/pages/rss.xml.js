import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = (
    await getCollection('posts', ({ data }) => !data.draft && data.lang === 'en')
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Alberto Le Baron',
    description: 'Personal archive of Alberto Le Baron — frontend, AI engineering, web tech, and whatever else is on my mind.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
  });
}
