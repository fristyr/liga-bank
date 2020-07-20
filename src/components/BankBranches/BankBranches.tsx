import React, { FC, useState } from 'react';
import { Checkbox } from '../Form/Checkbox';
import { MapBoxCustom } from '../MapBoxCustom';

import './BankBranches.scss';

export const BankBranches: FC = () => {
  const [countries, setCountries] = useState({
    russia: false,
    cis: false,
    europe: false,
  });
  return (
    <section className="bank-branches" id="bank-branches">
      <h2 className="bank-branches__title">Отделения Лига Банка</h2>
      <div className="countries">
        <div className="country-picker">
          <Checkbox
            id="russia"
            checboxLabel="Россия"
            inputWrapper="country-picker__element picker-element"
            onCheckboxChange={(v: boolean) => {
              setCountries({ ...countries, russia: v });
            }}
          />

          <Checkbox
            id="sng"
            checboxLabel="СНГ"
            inputWrapper="country-picker__element picker-element"
            onCheckboxChange={(v: boolean) => {
              setCountries({ ...countries, cis: v });
            }}
          />

          <Checkbox
            id="europa"
            checboxLabel="Европа"
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
