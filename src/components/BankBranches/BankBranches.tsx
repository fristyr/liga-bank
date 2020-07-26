import React, { FC, useState } from 'react';
import { Checkbox } from '../Form/Checkbox';
import { MapBoxCustom } from '../MapBoxCustom';
import { useTranslation } from 'react-i18next';

import './BankBranches.scss';

export const BankBranches: FC = () => {
  const [countries, setCountries] = useState({
    russia: false,
    cis: false,
    europe: false,
  });

  const { t } = useTranslation();

  return (
    <section className="bank-branches" id="bank-branches">
      <h2 className="bank-branches__title">{t('bankBranches.title')}</h2>
      <div className="countries">
        <div className="country-picker">
          <Checkbox
            id="russia"
            checboxLabel={t('bankBranches.inputs.0')}
            inputWrapper="country-picker__element picker-element"
            onCheckboxChange={(v: boolean) => {
              setCountries({ ...countries, russia: v });
            }}
          />

          <Checkbox
            id="sng"
            checboxLabel={t('bankBranches.inputs.1')}
            inputWrapper="country-picker__element picker-element"
            onCheckboxChange={(v: boolean) => {
              setCountries({ ...countries, cis: v });
            }}
          />

          <Checkbox
            id="europa"
            checboxLabel={t('bankBranches.inputs.2')}
            inputWrapper="country-picker__element "
            onCheckboxChange={(v: boolean) => {
              setCountries({ ...countries, europe: v });
            }}
          />
        </div>
      </div>
      <MapBoxCustom countries={countries} />
    </section>
  );
};
