import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Icon resolver                                                       */
/* ------------------------------------------------------------------ */

export const Icon = ({
  name,
  className = 'h-5 w-5',
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) => {
  const Cmp = (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Circle;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
};

/* ------------------------------------------------------------------ */
/* Logo                                                                */
/* ------------------------------------------------------------------ */

export const logoUrl =
  'https://ik.imagekit.io/Localleadengine/Local%20Lead%20Engine%20-%20Wbsite%20Logo.png?updatedAt=1779218224881';

export const LogoMark = ({ className = 'h-12 w-auto' }: { className?: string }) => (
  <img
    src={logoUrl}
    alt="Local Lead Engine Logo"
    className={`object-contain ${className}`}
  />
);

export const Wordmark = ({
  className = '',
  logoClassName = 'h-14 sm:h-16 md:h-20 w-auto max-w-[300px] sm:max-w-[460px]',
}: {
  className?: string;
  logoClassName?: string;
  tone?: 'dark' | 'light';
}) => (
  <Link
    to="/"
    className={`inline-flex items-center ${className}`}
    aria-label="Local Lead Engine home"
  >
    <img
      src={logoUrl}
      alt="Local Lead Engine"
      className={`object-contain ${logoClassName}`}
    />
  </Link>
);

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

const btnBase =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-full text-[0.9375rem] font-semibold transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60';

const variants = {
  primary: 'bg-brand text-white shadow-chip hover:bg-brand-light hover:shadow-lift',
  outline: 'bg-white text-ink border border-black/10 shadow-soft hover:border-brand/40 hover:shadow-card',
  light: 'bg-white text-navy shadow-chip hover:shadow-lift',
  ghostNavy: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
} as const;

const sizes = {
  sm: 'px-4 py-2 text-[0.8125rem]',
  md: 'px-5 py-3',
  lg: 'px-6 py-3.5 sm:px-7 sm:py-4',
} as const;

export const ArrowIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <ArrowUpRight
    className={`${className} transition-transform duration-300 ease-smooth group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5`}
    strokeWidth={2.2}
    aria-hidden="true"
  />
);

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  arrow?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
};

export const Btn = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  arrow = true,
  type = 'button',
  disabled,
  ariaLabel,
}: BtnProps) => {
  const cls = `${btnBase} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowIcon />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  );
};

/* ------------------------------------------------------------------ */
/* Eyebrow pill                                                        */
/* ------------------------------------------------------------------ */

export const Eyebrow = ({
  children,
  icon = 'Sparkles',
  tone = 'light',
  className = '',
}: {
  children: ReactNode;
  icon?: string;
  tone?: 'light' | 'dark';
  className?: string;
}) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.8125rem] font-semibold ${
      tone === 'dark'
        ? 'bg-white/10 text-brand-light ring-1 ring-inset ring-white/15'
        : 'bg-brand-chip text-brand ring-1 ring-inset ring-brand/10'
    } ${className}`}
  >
    <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2.2} />
    {children}
  </span>
);

/* ------------------------------------------------------------------ */
/* Read more link                                                      */
/* ------------------------------------------------------------------ */

export const ReadMore = ({
  to = '/google-ads-for-local-service-contractors',
  label = 'Read More',
}: {
  to?: string;
  label?: string;
}) => (
  <Link
    to={to}
    className="group/btn inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-brand transition-colors duration-300 hover:text-ink"
  >
    {label}
    <ArrowIcon className="h-3.5 w-3.5" />
  </Link>
);

/* ------------------------------------------------------------------ */
/* Avatars (CSS based — no image budget spent)                          */
/* ------------------------------------------------------------------ */

const avatarPalette = [
  'linear-gradient(135deg,#F1592A,#FFA26B)',
  'linear-gradient(135deg,#0F1B33,#3A5480)',
  'linear-gradient(135deg,#2F7A5B,#7DC9A4)',
  'linear-gradient(135deg,#8A4BC9,#C79BF0)',
  'linear-gradient(135deg,#B8862B,#F0CE86)',
];

export const Avatar = ({
  name,
  size = 40,
  className = '',
  index,
}: {
  name: string;
  size?: number;
  className?: string;
  index?: number;
}) => {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  const i = index ?? name.length % avatarPalette.length;

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white ring-2 ring-white ${className}`}
      style={{
        width: size,
        height: size,
        background: avatarPalette[i % avatarPalette.length],
        fontSize: Math.max(10, size * 0.36),
      }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
};

export const AvatarStack = ({ names }: { names: string[] }) => (
  <span className="flex items-center">
    {names.map((n, i) => (
      <Avatar
        key={n}
        name={n}
        size={26}
        index={i}
        className={i === 0 ? '' : '-ml-2.5'}
      />
    ))}
  </span>
);

/* ------------------------------------------------------------------ */
/* Stars                                                               */
/* ------------------------------------------------------------------ */

export const Stars = ({ count = 5, className = 'h-4 w-4' }: { count?: number; className?: string }) => (
  <span className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <Icons.Star key={i} className={`${className} fill-brand text-brand`} strokeWidth={0} />
    ))}
  </span>
);

/* ------------------------------------------------------------------ */
/* Google G                                                            */
/* ------------------------------------------------------------------ */

export const GoogleG = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.5 12.3c0-.9-.1-1.5-.2-2.2H12v4.2h6.5c-.1 1.1-.8 2.7-2.3 3.8l-.1.1 3.4 2.6.2.1c2.1-2 3.8-4.9 3.8-8.6z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.1 0 5.8-1 7.7-2.8l-3.7-2.8c-1 .7-2.3 1.2-4 1.2-3 0-5.6-2-6.5-4.8l-.1.1-3.4 2.6-.1.2C3.8 21.3 7.6 24 12 24z"
    />
    <path fill="#FBBC05" d="M5.5 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3V9.6L1.9 7l-.1.1C1 8.6.6 10.3.6 12s.4 3.4 1.2 4.9l3.7-2.6z" />
    <path
      fill="#EA4335"
      d="M12 4.7c2.1 0 3.6.9 4.4 1.7l3.2-3.1C17.7 1.5 15.1.4 12 .4 7.6.4 3.8 3.1 1.8 7l3.7 2.9C6.4 6.8 9 4.7 12 4.7z"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Decorative patterns                                                 */
/* ------------------------------------------------------------------ */

export const ChevronField = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 400 400"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <pattern id="dk-chev" width="34" height="34" patternUnits="userSpaceOnUse">
        <path
          d="M-4 22 L17 4 L38 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#dk-chev)" />
  </svg>
);

export const WaveField = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 400 200"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <pattern id="dk-wave" width="40" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M0 14 Q10 2 20 14 T40 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </pattern>
    </defs>
    <rect width="400" height="200" fill="url(#dk-wave)" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Section heading eyebrow + title block                               */
/* ------------------------------------------------------------------ */

export const SectionShell = ({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`relative ${className}`}>
    <div className="shell">{children}</div>
  </section>
);
