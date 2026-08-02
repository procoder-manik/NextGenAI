import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, FileText, Briefcase, Users, MessageSquare, HelpCircle, Star, Menu, X, Sparkles, Settings } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import ThemeToggle from '../components/common/ThemeToggle';
import Container from '../components/ui/Container';

const navItems = [
  { to: '/admin/dashboard', label: 'Overview', icon: LayoutDashboard },
  { to: '/admin/blogs', label: 'Blogs', icon: FileText },
  { to: '/admin/services', label: 'Services', icon: Briefcase },
  { to: '/admin/portfolio', label: 'Portfolio', icon: Briefcase },
  { to: '/admin/team', label: 'Team', icon: Users },
  { to: '/admin/contacts', label: 'Contacts', icon: MessageSquare },
  { to: '/admin/faqs', label: 'FAQs', icon: HelpCircle },
  { to: '/admin/testimonials', label: 'Testimonials', icon: Star },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-[var(--color-border)] bg-[var(--color-bg-card)]/95 backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex h-16 items-center justify-between border-b border-[var(--color-border)] px-6">
            <div>
              <p className="font-display text-lg font-bold">CMS Studio</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">NextGenAI</p>
            </div>
            <button className="rounded-lg p-2 lg:hidden" onClick={() => setMobileOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-1 px-3 py-5">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${isActive ? 'bg-gradient-to-r from-indigo-500/15 to-violet-500/10 text-indigo-500' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]'}`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="flex-1">
          <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-xl">
            <Container className="flex h-16 items-center justify-between gap-3 py-3">
              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-[var(--color-border)] p-2 lg:hidden" onClick={() => setMobileOpen(true)}>
                  <Menu className="h-5 w-5" />
                </button>
                <div>
                  <p className="font-display text-sm font-semibold">Control Center</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">Manage content, media, and campaigns</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <div className="hidden items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2 sm:flex">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
                    {user?.name?.charAt(0) || 'A'}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">{user?.name || 'Admin'}</p>
                    <p className="text-xs text-[var(--color-text-tertiary)]">Administrator</p>
                  </div>
                </div>
                <button className="rounded-xl border border-[var(--color-border)] px-3 py-2 text-sm font-semibold text-[var(--color-text-secondary)]" onClick={logout}>Sign out</button>
              </div>
            </Container>
          </header>

          <main className="px-3 py-6 lg:px-6">
            <Container className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-bg-card)]/70 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl sm:p-6 lg:p-8">
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-3 text-sm text-indigo-500">
                <Sparkles className="h-4 w-4" />
                <span>Premium CMS workspace with a refreshed experience for content, media, and growth operations.</span>
              </div>
              <Outlet />
            </Container>
          </main>
        </div>
      </div>
    </div>
  );
}