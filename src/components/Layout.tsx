
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Camera, Receipt, Search, User, Sparkles } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navItems = [
    { icon: Search, label: 'Wardrobe', path: '/' },
    { icon: Camera, label: 'Scan', path: '/scan' },
    { icon: Receipt, label: 'Receipts', path: '/receipts' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-coral-50/20">
      <div className="max-w-md mx-auto bg-white shadow-elegant min-h-screen relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-coral-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-24 h-24 bg-gradient-to-tr from-coral-200/20 to-purple-200/20 rounded-full blur-2xl"></div>

        {/* Header */}
        <header className="relative gradient-primary text-white p-6 pb-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-4 translate-x-4"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-4 -translate-x-4"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold">StyleAI</h1>
                <p className="text-purple-100 text-sm font-medium">Your AI Styling Assistant</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pb-24 relative z-10">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white/95 backdrop-blur-lg border-t border-gray-100/50">
          <div className="flex justify-around items-center py-2 px-4">
            {navItems.map(({ icon: Icon, label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex flex-col items-center py-3 px-4 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-purple-600 bg-purple-50 scale-105 shadow-sm'
                      : 'text-gray-500 hover:text-purple-600 hover:bg-gray-50'
                  }`
                }
              >
                <Icon size={22} className="mb-1" strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-xs font-semibold">{label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
