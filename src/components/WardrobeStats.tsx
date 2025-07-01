
import { Card } from '@/components/ui/card';

const WardrobeStats = () => {
  const stats = [
    { label: 'Total Items', value: '127', icon: '👔' },
    { label: 'Outfits Created', value: '24', icon: '✨' },
    { label: 'This Month', value: '8', icon: '📅' },
    { label: 'Favorites', value: '12', icon: '❤️' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4 text-center border-0 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-xs text-gray-600">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
};

export default WardrobeStats;
