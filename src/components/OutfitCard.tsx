
import { Card } from '@/components/ui/card';
import { MapPin, Thermometer, Clock } from 'lucide-react';

interface OutfitCardProps {
  title: string;
  items: string[];
  occasion: string;
  weather: string;
  image?: string;
}

const OutfitCard = ({ title, items, occasion, weather }: OutfitCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-0 shadow-soft group cursor-pointer">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-100 via-purple-50 to-coral-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
          <div className="text-center">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-1 shadow-sm">
              <span className="text-2xl">👗</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
            <div className="flex items-center gap-1 text-gray-500">
              <Clock size={14} />
              <span className="text-xs">Today</span>
            </div>
          </div>
          
          <div className="space-y-1 mb-4">
            {items.slice(0, 3).map((item, index) => (
              <p key={index} className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
                {item}
              </p>
            ))}
            {items.length > 3 && (
              <p className="text-xs text-gray-500 ml-4">+{items.length - 3} more items</p>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <MapPin size={12} className="text-purple-600" />
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                {occasion}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Thermometer size={12} className="text-blue-600" />
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {weather}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OutfitCard;
