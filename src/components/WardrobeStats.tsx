
import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const WardrobeStats = () => {
  const stats = [
    { 
      label: 'Total Items', 
      value: '127', 
      icon: '👔', 
      change: '+12 this month',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      label: 'Outfits Created', 
      value: '24', 
      icon: '✨', 
      change: '+5 this week',
      color: 'from-coral-500 to-coral-600'
    },
    { 
      label: 'Worn This Month', 
      value: '18', 
      icon: '📅', 
      change: '75% usage rate',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Favorites', 
      value: '12', 
      icon: '❤️', 
      change: 'Top picks',
      color: 'from-pink-500 to-pink-600'
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="p-5 text-center border-0 shadow-soft hover:shadow-md transition-all duration-200 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-60"></div>
          <div className="relative z-10">
            <div className="text-3xl mb-3">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-xs font-semibold text-gray-800 mb-2">{stat.label}</div>
            <div className="flex items-center justify-center gap-1">
              <TrendingUp size={10} className="text-green-600" />
              <span className="text-xs text-green-600 font-medium">{stat.change}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WardrobeStats;
