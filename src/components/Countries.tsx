import React from 'react';
import { MapPin, Users, Building2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Countries = () => {
  const { t } = useLanguage();
  const countries = [
    { name: t('countries.sn'), capital: t('countries.dakar'), flag: '🇸🇳' },
    { name: t('countries.ci'), capital: t('countries.abidjan'), flag: '🇨🇮' },
    { name: t('countries.gn'), capital: t('countries.conakry'), flag: '🇬🇳' },
    { name: t('countries.ml'), capital: t('countries.bamako'), flag: '🇲🇱' },
    { name: t('countries.cm'), capital: t('countries.yaounde'), flag: '🇨🇲' },
    { name: t('countries.sl'), capital: t('countries.freetown'), flag: '🇸🇱' },
  ];

  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('countries.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('countries.subtitle')}
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-orange-50 to-pink-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{country.flag}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#AE3D7D] transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {country.capital}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#E46E2F] to-[#AE3D7D] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-blue-100">{t('countries.stat_1')}</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-blue-100">{t('countries.stat_2')}</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-blue-100">{t('countries.stat_3')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;