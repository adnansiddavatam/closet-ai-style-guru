
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Camera, Receipt, Search, User } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-coral-50">
      <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen">
        {/* Header */}
        <header className="gradient-primary text-white p-6 pb-8">
          <h1 className="font-display text-2xl font-bold mb-2">StyleAI</h1>
          <p className="text-purple-100 text-sm">Your AI Styling Assistant</p>
        </header>

        {/* Main Content */}
        <main className="pb-20">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
          <div className="flex justify-around items-center py-2">
            {navItems.map(({ icon: Icon, label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-500 hover:text-purple-600'
                  }`
                }
              >
                <Icon size={20} />
                <span className="text-xs font-medium mt-1">{label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
