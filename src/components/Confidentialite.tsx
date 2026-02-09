import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Confidentialite = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 bg-pink-50">
      <h1 className="text-3xl font-bold mb-8 text-center"> {t('privacy_title')} </h1>

      <section className="space-y-8 text-justify leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. {t('privacy_policy_object')} </h2>
          <p>
            {t('privacy_policy_object_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. {t('privacy_scope')} </h2>
          <p>
            {t('privacy_scope_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. {t('privacy_principles')} </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('privacy_principles_list').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. {t('privacy_data_collected')} </h2>
          <p>
            {t('privacy_data_collected_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. {t('privacy_processing_purposes')} </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('privacy_processing_purposes_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. {t('privacy_consent')} </h2>
          <p>
            {t('privacy_consent_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. {t('privacy_data_retention')} </h2>
          <p>
            {t('privacy_data_retention_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. {t('privacy_user_rights')} </h2>
          <p>
            {t('privacy_user_rights_description')}
            {" "}
            <a href="mailto:privacy@bbsmastergroup.com" className="text-pink-800 underline">privacy@bbsmastergroup.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. {t('privacy_security_measures')} </h2>
          <p>
            {t('privacy_security_measures_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. {t('privacy_sharing_data')} </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('privacy_sharing_data_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. {t('privacy_transfers')} </h2>
          <p>
            {t('privacy_transfers_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. {t('privacy_release_policy')} </h2>
          <p>
            {t('privacy_release_policy_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. {t('privacy_contact')} </h2>
          <p>
            {t('privacy_contact_description')}
            {" "}
            <a href="mailto:privacy@bbsmastergroup.com" className="text-pink-800 underline">
              privacy@bbsmastergroup.com
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

export default Confidentialite;
