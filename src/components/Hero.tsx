import { ArrowRight, Shield, Clock, Globe2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-200"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#E46E2F] text-white rounded-full text-sm font-medium mb-8">
            <Globe2 className="w-4 h-4 mr-2" />
            {t("hero_badge")}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t("hero_title_1")}{" "}
            <span className="bg-gradient-to-r from-[#E46E2F] to-[#AE3D7D] bg-clip-text text-transparent">
              {t("hero_title_gradient")}
            </span>
            <br />
            {t("hero_title_2")}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero_subtitle")}
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5 text-[#AE3D7D]" />
              <span className="font-medium">{t("hero_secure")}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5 text-[#E46E2F]" />
              <span className="font-medium">{t("hero_24_7")}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Globe2 className="w-5 h-5 text-[#AE3D7D]" />
              <span className="font-medium">{t("hero_countries")}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://b2b.bbsmastergroup.com/login"
              className="group bg-gradient-to-r from-[#E46E2F] to-[#AE3D7D] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center"
            >
              {t("hero_cta")}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#AE3D7D] px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-[#E46E2F] transition-all duration-300"
            >
              {t("hero_discover")}
            </a>
          </div>
        </div>

        {/* Countries strip */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-4 font-medium">
            {t("hero_available")}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {['Sénégal', 'Côte d\'Ivoire', 'Guinée Conakry', 'Mali', 'Cameroun', 'Sierra Leone'].map((country) => (
              <span key={country} className="px-3 py-1 bg-white rounded-full shadow-sm border">
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
