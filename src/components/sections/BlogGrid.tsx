import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, CheckCircle2, Clock, X } from 'lucide-react';
import { posts, type Post } from '@/lib/site-data';
import { Avatar, Btn, Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

export const JournalModal: React.FC<{ post: Post | null; onClose: () => void }> = ({
  post,
  onClose,
}) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-black/[0.06] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-brand/10 text-brand font-extrabold text-xs px-3 py-1">
              {post.category}
            </span>
            {post.tradeTag && (
              <span className="rounded-full bg-cream text-warm font-bold text-xs px-2.5 py-1">
                {post.tradeTag}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 rounded-full bg-black/5 text-ink flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Article Title & Meta */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-ink leading-tight">{post.title}</h2>
            <div className="mt-4 flex items-center justify-between border-b border-black/[0.06] pb-4">
              <div className="flex items-center gap-3">
                <Avatar name={post.author} size={36} />
                <div>
                  <p className="text-xs font-bold text-ink">{post.author}</p>
                  <p className="text-[0.7rem] text-warm">{post.authorRole || 'Search Strategist'}</p>
                </div>
              </div>
              <div className="text-right text-xs text-warm flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-brand" />
                <span>{post.readTime} • Published {post.date}</span>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-soft">
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-h-[340px] object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-black/70 backdrop-blur p-2.5 text-white text-xs flex items-center justify-between">
              <span className="font-semibold text-white/90">Local Lead Engine Field Journal Note</span>
              <span className="text-[0.7rem] text-brand-light font-bold">Verified Contractor Strategy</span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="rounded-2xl bg-brand/5 border border-brand/20 p-5 space-y-3">
              <h4 className="text-xs uppercase font-extrabold text-brand tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                <span>Key Strategy Takeaways</span>
              </h4>
              <ul className="space-y-2 text-xs text-ink font-medium">
                {post.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Paragraphs */}
          <div className="space-y-4 text-sm text-warm leading-relaxed">
            {post.contentParagraphs ? (
              post.contentParagraphs.map((p, idx) => <p key={idx}>{p}</p>)
            ) : (
              <p>{post.excerpt}</p>
            )}
          </div>

          {/* Connected Case Study Card */}
          {post.caseStudyLink && (
            <div className="rounded-2xl bg-cream border border-black/[0.08] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[0.7rem] font-extrabold uppercase text-brand tracking-wider">
                  Related Case Study Result
                </span>
                <p className="text-base font-bold text-ink mt-0.5">{post.caseStudyLink.title}</p>
                <p className="text-xs text-warm mt-0.5">Primary Outcome: <strong className="text-brand font-black">{post.caseStudyLink.metric}</strong></p>
              </div>
              <Link
                to={`/case-studies`}
                onClick={onClose}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-brand text-white text-xs font-bold px-4 py-2 hover:bg-ink transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="bg-cream border-t border-black/[0.06] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warm font-medium text-center sm:text-left">
            Want us to audit your Google Ads campaigns using this exact checklist?
          </p>
          <Btn to="/strategy-call" size="sm" className="shrink-0 w-full sm:w-auto">
            Book Strategy Call
          </Btn>
        </div>
      </div>
    </div>
  );
};

export const PostCard = ({
  post,
  index = 0,
  onSelect,
}: {
  post: Post;
  index?: number;
  onSelect?: (post: Post) => void;
}) => (
  <Reveal delay={100 + index * 90} y={30} className="h-full">
    <div
      onClick={() => onSelect && onSelect(post)}
      className="group block h-full cursor-pointer"
    >
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
          {post.tradeTag && (
            <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[0.7rem] font-bold text-ink shadow-sm">
              {post.tradeTag}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col px-3 pb-4 pt-5">
          <div className="flex items-center justify-between">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-brand">
              {post.category}
            </p>
            {post.caseStudyLink && (
              <span className="text-[0.6875rem] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                {post.caseStudyLink.metric}
              </span>
            )}
          </div>

          <h3 className="mt-2 h-card transition-colors duration-300 group-hover:text-brand">
            {post.title}
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-warm flex-1">{post.excerpt}</p>

          <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
            <div className="flex items-center gap-2.5">
              <Avatar name={post.author} size={30} index={index} />
              <div>
                <p className="text-[0.8125rem] font-bold leading-tight text-ink">{post.author}</p>
                <p className="text-[0.6875rem] text-warm-light">{post.readTime}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-brand group-hover:underline">
              <span>Read Note</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </div>
  </Reveal>
);

const BlogGrid: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <section id="blog" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="mx-auto max-w-[34rem] text-center">
          <Reveal y={18}>
            <Eyebrow icon="Newspaper">From the Journal</Eyebrow>
          </Reveal>
          <MaskHeading lines={['Field Notes & Strategy']} className="mt-5 h-section" />
          <Reveal delay={120} y={20}>
            <p className="mx-auto mt-5 max-w-[30rem] body-lg">
              Tactical search marketing lessons directly from our active contractor campaigns — what is producing booked calls right now, and what spend we have eliminated.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <PostCard key={post.id} post={post} index={i} onSelect={(p) => setSelectedPost(p)} />
          ))}
        </div>

        <Reveal delay={200} y={20} className="mt-12 flex justify-center gap-4">
          <Btn to="/blog" size="lg">
            View All Strategy Articles
          </Btn>
        </Reveal>
      </div>

      <JournalModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};

export default BlogGrid;
