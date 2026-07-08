import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Organizations', href: '#organizations' },
  { label: 'Contact', href: '#contact' },
];

const buttonBase =
  'inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Logo() {
  return (
    <a
      href="/"
      aria-label="QFlow home"
      className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-blue-600 text-lg font-black tracking-normal text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
        Q
      </span>
      <span className="text-xl font-bold tracking-normal text-slate-950"><Link to={ROUTES.HOME}>
  QFlow
</Link></span>
    </a>
  );
}

function NavLinks({ onNavigate }) {
  return (
    <ul
      className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1"
      aria-label="Primary navigation"
    >
      {navItems.map((item) => (
        <li key={item.href}>
          <motion.a
            href={item.href}
            onClick={onNavigate}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-950/5 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {item.label}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

function NavbarActions({ className = '' }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <motion.a
        href="#customer-login"
        className={cn(
          buttonBase,
          'border border-slate-300 bg-white/40 text-slate-800 hover:border-blue-300 hover:bg-blue-50/80 hover:text-blue-700',
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={ROUTES.LOGIN}>
  Sign In
</Link>
      </motion.a>
      <motion.a
        href="#register-organization"
        className={cn(
          buttonBase,
          'bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700',
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
       <Link to={ROUTES.ROLE_SELECTION}>
  Create Account
</Link>
      </motion.a>
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        isScrolled || isMenuOpen
          ? 'border-white/50 bg-white/75 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex min-w-0 flex-1 items-center">
          <Logo />
        </div>

        <div className="hidden items-center justify-center md:flex">
          <NavLinks />
        </div>

        <div className="hidden flex-1 justify-end lg:flex">
          <NavbarActions />
        </div>

        <div className="flex flex-1 justify-end gap-2 lg:hidden">
          <NavbarActions className="hidden sm:flex" />
          <motion.button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="qflow-mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-300 bg-white/60 text-slate-800 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:hidden"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="qflow-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/85 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
              <NavLinks onNavigate={closeMenu} />
              <NavbarActions className="grid grid-cols-1 sm:hidden" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
