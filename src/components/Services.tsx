import React from 'react';
import {
  CreditCard,
  Banknote,
  TrendingUp,
  FileText,
  Shield,
  Clock
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: CreditCard,
      title: t('services.payment_title'),
      description: t('services.payment_description'),
      color: 'from-[#E46E2F] to-[#AE3D7D]'
    },
    {
      icon: Banknote,
      title: t('services.transfer_title'),
      description: t('services.transfer_description'),
      color: 'from-[#E46E2F] to-[#AE3D7D]'
    },
    {
      icon: TrendingUp,
      title: t('services.rate_title'),
      description: t('services.rate_description'),
      color: 'from-[#E46E2F] to-[#AE3D7D]'
    },
    {
      icon: FileText,
      title: t('services.documents_title'),
      description: t('services.documents_description'),
      color: 'from-[#E46E2F] to-[#AE3D7D]'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: t('services.presence_title'),
      description: t('services.presence_description')
    },
    {
      icon: Clock,
      title: t('services.compliance_title'),
      description: t('services.compliance_description')
    },
    {
      icon: CreditCard,
      title: t('services.support_title'),
      description: t('services.support_description')
    },
    {
      icon: FileText,
      title: t('services.platform_title'),
      description: t('services.platform_description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.header')}
            <span className="bg-gradient-to-r from-[#AE3D7D] to-[#E46E2F] bg-clip-text text-transparent">
              {t('services.header_emphasis')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subheader')}
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.why_title')}
            </h3>
            <p className="text-lg text-gray-600">
              {t('services.why_description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-[#AE3D7D]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
