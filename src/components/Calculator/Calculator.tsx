import React, { FC } from 'react';
import { Select } from '../index';
import './Calculator.scss';

export const Calculator: FC = () => {
  return (
    <section className="calculator">
      <h2 className="calculator__title">Кредитный калькулятор</h2>
      <p className="calculator__step">Шаг 1. Цель кредита</p>
      <Select />
    </section>
  );
};
