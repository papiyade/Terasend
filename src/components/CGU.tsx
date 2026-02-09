import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const CGU = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 bg-pink-50">
      <h1 className="text-3xl font-bold mb-6 text-center"> {t('cgu.cgu_title')} </h1>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. {t('cgu.cgu_preambule_name')} </h2>
          <p>
            {t('cgu.cgu_preambule')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. {t('cgu.cgu_definitions')} </h2>
          <ul className="list-disc list-inside space-y-1">
           {t('cgu.cgu_definitions_list').map((item: string, index: number) => (
      <li key={index}>{item}</li>
    ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. {t('cgu.cgu_object')} </h2>
          <p>
            {t('cgu.cgu_object_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. {t('cgu.cgu_adhesion')}</h2>
          <ul className="list-disc list-inside space-y-1">
           {t('cgu.cgu_adhesion_list').map((item: string, index: number) => (
      <li key={index}>{item}</li>
    ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. {t('cgu.cgu_responsibilities')} </h2>
          <ul className="list-disc list-inside space-y-1">
           {t('cgu.cgu_responsibilities_list').map((item: string, index: number) => (
      <li key={index}>{item}</li>
    ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. {t('cgu.cgu_tariffs')} </h2>
          <p>
            {t('cgu.cgu_tariffs_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. {t('cgu.cgu_personal_data')} </h2>
          <p>
            {t('cgu.cgu_personal_data_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. {t('cgu.cgu_conformite')} </h2>
          <p>
            {t('cgu.cgu_conformite_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. {t('cgu.cgu_responsability_limitation')}</h2>
          <p>
            {t('cgu.cgu_responsability_limitation_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. {t('cgu.cgu_suspension_termination')} </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('cgu.cgu_suspension_termination_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. {t('cgu.cgu_conditions_modification')} </h2>
          <p>
            {t('cgu.cgu_conditions_modification_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. {t('cgu.cgu_governing_law')} </h2>
          <p>
            {t('cgu.cgu_governing_law_description')}
          </p>
        </div>

<div>
  <h2 className="text-xl font-semibold mb-2">
    13. {t('cgu.cgu_contact')}
  </h2>
  <p>
    {t('cgu.cgu_contact_description')}{" "}
    <a
      href="mailto:contact@bbsmastergroup.com"
      className="text-pink-800 underline"
    >
      contact@bbsmastergroup.com
    </a>
  </p>
</div>

      </section>

<div className="mt-12 text-center">
  <Link to="/" className="text-pink-800 hover:underline text-sm">
    {t('cgu.cgu_back_home')}
  </Link>
</div>

    </div>
  );
};

export default CGU;
