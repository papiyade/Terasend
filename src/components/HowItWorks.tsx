import React from 'react';
import { UserPlus, FileText, CheckCircle, Eye } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: t('howItWork.step_1_title'),
      description: t('howItWork.step_1_description'),
      color: 'from-[#E46E2F] to-[#AE3D7D]'
    },
    {
      number: '02',
      icon: FileText,
      title: t('howItWork.step_2_title'),
      description: t('howItWork.step_2_description'),
      color: 'from-[#E46E2F] to-[#AE3D7D]'
    },
    {
      number: '03',
      icon: CheckCircle,
      title: t('howItWork.step_3_title'),
      description: t('howItWork.step_3_description'),
      color: 'from-[#E46E2F] to-[#AE3D7D]'
    },
    {
      number: '04',
      icon: Eye,
      title: t('howItWork.step_4_title'),
      description: t('howItWork.step_4_description'),
      color: 'from-[#E46E2F] to-[#AE3D7D]'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('howItWork.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('howItWork.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200"></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 w-0.5 h-20 bg-gray-200"></div>
                )}

                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>

                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('howItWork.cta_title')}
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('howItWork.cta_description')}
          </p>
          <a
            href="https://b2b.bbsmastergroup.com/login"
            className="inline-flex items-center bg-gradient-to-r from-[#E46E2F] to-[#AE3D7D] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            {t('howItWork.cta_button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
