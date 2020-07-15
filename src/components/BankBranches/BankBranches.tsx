import React, { FC, useState } from 'react';
import { Checkbox, MapBoxCustom } from '../index';

import './BankBranches.scss';

export const BankBranches: FC = () => {
  const [countries, setCountries] = useState({
    russia: false,
    sng: false,
    europa: false,
  });
  return (
    <section className="bank-branches">
      <h2 className="bank-branches__title">Отделения Лига Банка</h2>
      <div className="country-picker">
        <Checkbox
          id="russia"
          checboxLabel="Россия"
          inputWrapper="country-picker__element"
          onCheckboxChange={(v: boolean) => {
            setCountries({ ...countries, russia: v });
          }}
        />

        <Checkbox
          id="sng"
          checboxLabel="СНГ"
          inputWrapper="country-picker__element"
          onCheckboxChange={(v: boolean) => {
            setCountries({ ...countries, sng: v });
          }}
        />

        <Checkbox
          id="europa"
          checboxLabel="Европпа"
          onCheckboxChange={(v: boolean) => {
            setCountries({ ...countries, europa: v });
          }}
        />
      </div>
      <MapBoxCustom countries={countries} />
    </section>
  );
};
