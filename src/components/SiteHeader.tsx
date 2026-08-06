import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navItems } from '@/lib/site-data';
import { Btn, Wordmark } from '@/components/kit';
import { useScrolled } from '@/components/motion';

const SiteHeader: React.FC = () => {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
          scrolled
            ? 'border-b border-black/[0.06] bg-cream/80 py-2 shadow-soft backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent py-2.5 sm:py-3'
        }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          <Wordmark
            logoClassName="h-14 sm:h-16 md:h-20 w-auto max-w-[300px] sm:max-w-[460px]"
          />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-all duration-200 ease-smooth hover:bg-brand-soft hover:text-brand ${
                    isActive(item.href) ? 'bg-brand-soft text-brand font-semibold' : 'text-warm'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full w-56 translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-smooth group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-2 shadow-card">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block rounded-xl px-3.5 py-2.5 text-[0.875rem] font-medium text-warm transition-all duration-200 hover:bg-brand-soft hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Btn to="/contact" size="md" className="hidden sm:inline-flex">
              Book Strategy Call
            </Btn>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-soft transition-all duration-300 ease-smooth hover:scale-105 hover:border-brand/40 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-cream transition-opacity duration-500 ease-smooth ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="relative flex h-full flex-col">
          <div className="shell flex items-center justify-between py-5">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-soft transition-transform duration-300 hover:rotate-90"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>

          <nav
            className="shell flex flex-1 flex-col justify-center gap-1 overflow-y-auto pb-16"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, i) => (
              <div
                key={item.label}
                className="border-b border-black/[0.07] py-1"
                style={{
                  transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                  transitionDelay: `${open ? 120 + i * 70 : 0}ms`,
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(26px)',
                }}
              >
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3.5 text-2xl font-bold tracking-tight text-ink transition-colors duration-200 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-soft"
                      aria-label={`Toggle ${item.label} links`}
                      aria-expanded={openGroup === item.label}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          openGroup === item.label ? 'rotate-180' : ''
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div
                    className="grid overflow-hidden transition-all duration-500 ease-smooth"
                    style={{
                      gridTemplateRows: openGroup === item.label ? '1fr' : '0fr',
                      opacity: openGroup === item.label ? 1 : 0,
                    }}
                  >
                    <div className="min-h-0 pb-3 pl-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-base font-medium text-warm transition-colors hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div
              className="pt-8"
              style={{
                transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: `${open ? 120 + navItems.length * 70 : 0}ms`,
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(26px)',
              }}
            >
              <Btn to="/contact" size="lg" className="w-full" onClick={() => setOpen(false)}>
                Book Strategy Call
              </Btn>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SiteHeader;
