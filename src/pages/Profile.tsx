
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Settings, Palette, Calendar, Award, ChevronRight } from 'lucide-react';

const Profile = () => {
  const preferences = [
    { category: 'Style', value: 'Minimalist Chic' },
    { category: 'Colors', value: 'Neutral & Earth Tones' },
    { category: 'Fit', value: 'Tailored & Comfortable' },
    { category: 'Occasions', value: 'Work & Casual' }
  ];

  const achievements = [
    { title: 'Wardrobe Builder', description: '100+ items cataloged', icon: '👔' },
    { title: 'Outfit Creator', description: '25 outfits planned', icon: '✨' },
    { title: 'Style Consistent', description: '7-day streak', icon: '🔥' }
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Profile Header */}
        <Card className="p-6 text-center gradient-primary text-white border-0">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="text-white" size={32} />
          </div>
          <h2 className="text-xl font-semibold mb-1">Sarah Johnson</h2>
          <p className="text-purple-100">Style Enthusiast</p>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <div>
              <div className="font-semibold">127</div>
              <div className="text-purple-100">Items</div>
            </div>
            <div>
              <div className="font-semibold">24</div>
              <div className="text-purple-100">Outfits</div>
            </div>
            <div>
              <div className="font-semibold">5</div>
              <div className="text-purple-100">Brands</div>
            </div>
          </div>
        </Card>

        {/* Style Preferences */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Style Preferences</h3>
          <div className="grid grid-cols-2 gap-3">
            {preferences.map((pref, index) => (
              <Card key={index} className="p-4 border-0 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">{pref.category}</div>
                <div className="font-medium text-gray-900 text-sm">{pref.value}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-4 border-0 shadow-sm">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{achievement.icon}</span>
                  <div>
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Settings */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
          <div className="space-y-2">
            {[
              { icon: Palette, label: 'Style Preferences', subtitle: 'Update your style profile' },
              { icon: Calendar, label: 'Outfit Planning', subtitle: 'Calendar and reminders' },
              { icon: Settings, label: 'App Settings', subtitle: 'Notifications and privacy' },
              { icon: Award, label: 'Premium Features', subtitle: 'Upgrade your experience' }
            ].map((item, index) => (
              <Card key={index} className="p-4 border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <item.icon className="text-purple-600 mr-3" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900">{item.label}</h4>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400" size={16} />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Insights */}
        <Card className="p-5 bg-gradient-to-r from-purple-50 to-coral-50 border-0">
          <h4 className="font-semibold text-gray-900 mb-2">🤖 AI Insight</h4>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Based on your wardrobe, you tend to prefer classic, versatile pieces. 
            Consider adding a statement accessory to elevate your looks!
          </p>
          <Button variant="outline" size="sm">
            Get Style Tips
          </Button>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
