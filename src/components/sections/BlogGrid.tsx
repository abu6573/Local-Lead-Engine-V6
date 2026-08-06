import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { posts, type Post } from '@/lib/site-data';
import { Avatar, Btn, Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

export const PostCard = ({ post, index = 0 }: { post: Post; index?: number }) => (
  <Reveal delay={100 + index * 90} y={30} className="h-full">
    <Link to={`/blog#${post.id}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-soft transition-all duration-500 ease-smooth group-hover:-translate-y-2 group-hover:shadow-lift">
        <div className="relative overflow-hidden rounded-[1.35rem]">
          <img
            src={post.image}
            alt={post.title}
            width={1100}
            height={737}
            className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.06]"
            loading="lazy"
          />
          <span className="absolute bottom-3 right-3 rounded-xl bg-brand px-3 py-1.5 text-center leading-none text-white shadow-chip">
            <span className="block text-[0.9375rem] font-extrabold">{post.day}</span>
            <span className="mt-0.5 block text-[0.625rem] font-semibold uppercase tracking-wider">
              {post.month}
            </span>
          </span>
        </div>

        <div className="flex flex-1 flex-col px-3 pb-4 pt-5">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-brand">
            {post.category}
          </p>
          <h3 className="mt-2 h-card transition-colors duration-300 group-hover:text-brand">
            {post.title}
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-warm">{post.excerpt}</p>

          <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
            <div className="flex items-center gap-2.5">
              <Avatar name={post.author} size={30} index={index} />
              <div>
                <p className="text-[0.8125rem] font-bold leading-tight text-ink">{post.author}</p>
                <p className="text-[0.6875rem] text-warm-light">{post.readTime}</p>
              </div>
            </div>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream text-brand transition-all duration-500 ease-smooth group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  </Reveal>
);

const BlogGrid: React.FC = () => (
  <section id="blog" className="bg-cream py-20 sm:py-24 lg:py-28">
    <div className="shell">
      <div className="mx-auto max-w-[34rem] text-center">
        <Reveal y={18}>
          <Eyebrow icon="Newspaper">From the Journal</Eyebrow>
        </Reveal>
        <MaskHeading lines={['Blogs & Articles']} className="mt-5 h-section" />
        <Reveal delay={120} y={20}>
          <p className="mx-auto mt-5 max-w-[30rem] body-lg">
            Field notes from the strategists running our campaigns — what is working in search right
            now, and what we have stopped doing.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>

      <Reveal delay={200} y={20} className="mt-12 flex justify-center">
        <Btn to="/blog" size="lg">
          Read All Articles
        </Btn>
      </Reveal>
    </div>
  </section>
);

export default BlogGrid;
