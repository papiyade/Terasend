import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const ConformiteFloatingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* 🔘 Bouton flottant en bas à droite */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-white text-pink-800 border border-pink-800 rounded-full shadow-lg hover:bg-orange-50 transition-all duration-300 animate-fade-in-right"
      >
       {t('politique_conformite')}
      </button>

      {/* 🪟 Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4 animate-fade-in">
          <div className="bg-gradient-to-b from-pink-200 to-orange-100 rounded-xl shadow-xl max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-[#AE3D7D]">
              {t('pc_title')}
            </h2>
            <div className="text-sm text-gray-800 space-y-4 text-justify">
              <p><strong>1. {t('pc_introduction_title')} </strong><br />
                {t('pc_introduction')}
              </p>
              <p><strong>2. {t('pc_regulatory_framework')} </strong><br />
                {t('pc_regulatory_framework_description')}
                <ul className="list-disc ml-5 mt-1">
                  {t('pc_regulatory_framework_list').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
              <p><strong>3. {t('pc_compliance_commitment')} </strong><br />
                {t('pc_compliance_commitment_description')}
                <ul className="list-disc ml-5 mt-1">
                  {t('pc_compliance_commitment_list').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {t('pc_compliance_commitment_department')}
              </p>
              <p><strong>4. {t('pc_zero_tolerance')} </strong><br />
                {t('pc_zero_tolerance_description')}
                <ul className="list-disc ml-5 mt-1">
                  {t('pc_zero_tolerance_list').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {t('pc_zero_tolerance_respect')}
              </p>
              <p><strong>5. {t('pc_control_measures')} </strong><br />
                {t('pc_control_measures_description')}
                <ul className="list-disc ml-5 mt-1">
                  {t('pc_control_measures_list').map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </p>
              <p><strong>6. {t('pc_cooperation')} </strong><br />
                  
                <ul className="list-disc ml-5 mt-1">
                  {t('pc_cooperation_list').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
              <p><strong>7. {t('pc_revision_governance')} </strong><br />
                {t('pc_revision_governance_description')}
                <ul className="list-disc ml-5 mt-1">
                  {t('pc_revision_governance_list').map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </p>
              <p><strong> {t('pc_contact')} </strong><br />
                {t('pc_contact_description')}
                 <a href="mailto:contact@bbsmastergroup.com" className="text-[#AE3D7D] hover:underline ml-1">contact@bbsmastergroup.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConformiteFloatingModal;
