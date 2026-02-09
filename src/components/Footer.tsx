import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const countries = [
    t('footer.footer_country_1'),
    t('footer.footer_country_2'),
    t('footer.footer_country_3'),
    t('footer.footer_country_4'),
    t('footer.footer_country_5'),
    t('footer.footer_country_6'),
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">
              {t('footer.footer_description')}
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-5 h-5 text-[#E46E2F]" />
                <span className="text-sm">{t('footer.footer_bceao')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe className="w-5 h-5 text-[#E46E2F]" />
                <span className="text-sm">{t('footer.footer_countries')}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.footer_services')}</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('footer.footer_payment')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('footer.footer_transfer')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('footer.footer_rate')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">{t('footer.footer_documents')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.footer_contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#E46E2F] mt-0.5" />
                <div>
                  <a href="mailto:contact@bbsmastergroup.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@bbsmastergroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E46E2F] mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">{t('footer.footer_location')}</p>
                  <p className="text-gray-300 text-sm">{t('footer.footer_countries_area')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">{t('footer.footer_covered_countries')}</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {countries.map((country) => (
                <span key={country} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-center">
          <p className="text-gray-400 text-sm mb-2">
            {t('footer.footer_copy')}
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-400 font-medium">
            <Link to="/cgu" className="hover:underline"><p> {t('footer.footer_general_conditions')} </p></Link>
            <Link to="/confidentialite" className="hover:underline"><p> {t('footer.footer_privacy_policy')} </p></Link>
            <Link to="/securite" className="hover:underline"><p> {t('footer.footer_security_policy')} </p></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
