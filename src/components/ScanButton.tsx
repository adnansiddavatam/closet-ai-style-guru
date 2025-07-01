
import { Camera, Receipt } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ScanButtonProps {
  type: 'photo' | 'receipt';
  title: string;
  description: string;
  onClick: () => void;
}

const ScanButton = ({ type, title, description, onClick }: ScanButtonProps) => {
  const Icon = type === 'photo' ? Camera : Receipt;
  const gradient = type === 'photo' ? 'gradient-primary' : 'gradient-secondary';

  return (
    <Card 
      className="p-8 cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-0 shadow-soft group relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white opacity-60"></div>
      <div className="relative z-10">
        <div className={`w-20 h-20 ${gradient} rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
          <Icon className="text-white" size={32} />
        </div>
        
        <h3 className="font-bold text-gray-900 text-center mb-3 text-xl">{title}</h3>
        <p className="text-sm text-gray-600 text-center leading-relaxed">{description}</p>
        
        <div className="mt-6 text-center">
          <span className="inline-flex items-center text-purple-600 text-sm font-medium">
            Get Started
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ScanButton;
