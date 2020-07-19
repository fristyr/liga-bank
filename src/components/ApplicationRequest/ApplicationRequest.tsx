import React, { FC } from 'react';
import { Input } from '../Form/Input';
import './ApplicationRequest.scss';


interface Props {
  selectValue?: number | null;
  priceValue?: number;
  initialFee?: number;
  years?: number;
}

export const ApplicationRequest: FC<Props> = ({
  selectValue,
  priceValue,
  initialFee,
  years,
}) => {
  const data = [
    { title: 'Номер заявки', description: '№ 0010', id: '1' },
    { title: 'Цель кредита', description: selectValue, id: '2' },
    {
      title: 'Стоимость недвижимости',
      description: `${priceValue} рублей`,
      id: '3',
    },
    {
      title: 'Первоначальный взнос',
      description: `${initialFee} рублей`,
      id: '4',
    },
    { title: 'Срок кредитования', description: `${years} рублей`, id: '5' },
  ];

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
          <Input inputPlaceholder="E-mail" inputClassName="grid-input__el" />
        </div>
      </div>
      <button type="button" className="button application-form__button">
        Отправить
      </button>
    </form>
  );
};
