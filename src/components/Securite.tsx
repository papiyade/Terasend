import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const Securite = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 bg-pink-50">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {t('security_title')}
      </h1>

      <section className="space-y-8 text-justify leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. 
          {t('security_object')}
          </h2>
          <p>
            {t('security_object_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. 
          {t('security_scope')}
          </h2>
          <p>
            {t('security_scope_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. 
          {t('security_principles')}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('security_principles_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. 
          {t('security_governance')}
          </h2>
          <p>
            {t('security_governance_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. 
          {t('security_information_management')}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('security_information_management_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. 
          {t('security_system_access')}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('security_system_access_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. 
          {t('security_network_security')}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('security_network_security_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. 
          {t('security_save_data')}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('security_save_data_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. 
          {t('security_incident_management')}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('security_incident_management_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. 
          {t('security_training')}
          </h2>
          <p>
            {t('security_training_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. 
          {t('security_evaluation_audit')}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {t('security_evaluation_audit_list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. 
          {t('security_responsibility')}
          </h2>
          <p>
            {t('security_responsibility_description')}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. 
          {t('security_policy_update')}
          </h2>
          <p>
            {t('security_policy_update_description')}
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

export default Securite;
