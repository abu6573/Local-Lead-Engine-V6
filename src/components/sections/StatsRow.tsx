import React from 'react';
import { stats } from '@/lib/site-data';
import { CountUp, Reveal } from '@/components/motion';

const StatsRow: React.FC = () => (
  <section className="bg-cream pb-6">
    <div className="shell">
      <Reveal
        y={30}
        className="grid gap-8 rounded-[2rem] border border-black/[0.06] bg-white px-7 py-10 shadow-soft sm:grid-cols-2 sm:px-10 lg:grid-cols-4"
      >
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={100 + i * 90} y={20} className="text-center">
            <p className="text-[2.5rem] font-extrabold leading-none tracking-tight text-ink">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2.5 text-[0.9375rem] text-warm">{s.label}</p>
          </Reveal>
        ))}
      </Reveal>
    </div>
  </section>
);

export default StatsRow;
