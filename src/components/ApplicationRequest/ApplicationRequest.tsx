import React, { FC } from 'react';
import { Input } from '../index';
import './ApplicationRequest.scss';

const data = [
  { title: 'Номер заявки', description: '№ 0010', id: '1' },
  { title: 'Цель кредита', description: 'Ипотека', id: '2' },
  { title: 'Стоимость недвижимости', description: '2 000 000 рублей', id: '3' },
  { title: 'Первоначальный взнос', description: '200 000 рублей', id: '4' },
  { title: 'Срок кредитования', description: '5 лет', id: '5' },
];

export const ApplicationRequest: FC = () => {
  return (
    <form className="application-form">
      <h2 className="calculator__step application-form__title">
        Шаг 3. Оформление заявки
      </h2>
      <div className="req-block">
        {data.map(({ title, description, id }) => (
          <div className="req-item" key={id}>
            <p className="req-item__title">{title}</p>
            <p className="req-item__description">{description}</p>
          </div>
        ))}
      </div>
      <div className="req-inputs">
        <div className="grid-input">
          <Input inputPlaceholder="ФИО" />
        </div>
        <div className="grid-input">
          <Input inputPlaceholder="Телефон" inputClassName="grid-input__el" />
          <Input inputPlaceholder="E-mail"  inputClassName="grid-input__el" />
        </div>
      </div>
      <button className="button application-form__button">Отправить</button>
    </form>
  );
};