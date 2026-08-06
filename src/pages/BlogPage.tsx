import React, { useMemo, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { PostCard } from '@/components/sections/BlogGrid';
import { Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { posts } from '@/lib/site-data';

const BlogPage: React.FC = () => {
  const categories = useMemo(
    () => ['All Posts', ...Array.from(new Set(posts.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState('All Posts');

  const list = active === 'All Posts' ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <PageHero
          crumb="Blog"
          eyebrow="Blogs & Articles"
          eyebrowIcon="Newspaper"
          titleLines={['Notes From', 'the Search', 'Coalface']}
          intro="Practical writing from the team running the campaigns — audits, content operations and the measurement that proves it worked."
        />

        <section className="pb-8">
          <div className="shell">
            <Reveal y={20} className="flex flex-wrap gap-2.5">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={active === c}
                  className={`rounded-full px-4 py-2.5 text-[0.875rem] font-semibold transition-all duration-300 ease-smooth ${
                    active === c
                      ? 'bg-brand text-white shadow-chip'
                      : 'border border-black/[0.08] bg-white text-warm hover:-translate-y-0.5 hover:text-ink hover:shadow-soft'
                  }`}
                >
                  {c}
                </button>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="pb-20 pt-8 sm:pb-24">
          <div className="shell grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((post, i) => (
              <div key={post.id} id={post.id} className="scroll-mt-28">
                <PostCard post={post} index={i} />
              </div>
            ))}
          </div>

          {list.length === 0 && (
            <p className="shell mt-10 text-center text-warm">
              No articles in this category yet.
            </p>
          )}
        </section>

        <section className="bg-cream-deep py-20 sm:py-24">
          <div className="shell mx-auto max-w-[36rem] text-center">
            <Reveal y={18}>
              <Eyebrow icon="Mail">Newsletter</Eyebrow>
            </Reveal>
            <MaskHeading
              lines={['One Useful Email', 'Every Fortnight']}
              className="mt-5 h-section"
            />
            <Reveal delay={140} y={20}>
              <p className="mx-auto mt-5 max-w-[30rem] body-lg">
                Search algorithm changes explained in plain language, plus the tactics we are testing
                this month. Subscribe using the form in the footer below.
              </p>
            </Reveal>
          </div>
        </section>

        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
};

export default BlogPage;
