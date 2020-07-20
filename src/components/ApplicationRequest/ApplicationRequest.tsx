import React, { FC, FormEvent, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Input } from '../Form/Input';
import closeIcon from '../../assets/close-icon.svg';

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

  const [reqCredentials, setReqCredentials] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [reqConfirmModal, setReqConfirmModal] = useState(false);

  const reqModalVisibility = () => {
    setReqConfirmModal(!reqConfirmModal);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, phone, email } = reqCredentials;
    const reqData = {
      selectValue,
      priceValue,
      initialFee,
      years,
      name,
      phone,
      email,
    };
    localStorage.setItem('Credit request', JSON.stringify(reqData));
    reqModalVisibility();
  };

  return (
    <form
      className="application-form"
      onSubmit={handleSubmit}
      id="application-form"
    >
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
          <Input
            inputPlaceholder="ФИО"
            onInputChange={(e: string) => {
              setReqCredentials({ ...reqCredentials, name: e });
            }}
          />
        </div>
        <div className="grid-input">
          <Input
            inputPlaceholder="Телефон"
            inputClassName="grid-input__el grid-input__el--phone"
            onInputChange={(e: string) => {
              setReqCredentials({ ...reqCredentials, phone: e });
            }}
          />
          <Input
            inputPlaceholder="E-mail"
            inputClassName="grid-input__el "
            onInputChange={(e: string) => {
              setReqCredentials({ ...reqCredentials, email: e });
            }}
          />
        </div>
      </div>
      <button type="submit" className="button application-form__button">
        Отправить
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="login__modal"
        open={reqConfirmModal}
        onClose={reqModalVisibility}
        closeAfterTransition
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="confirmation-modal">
          <button
            type="button"
            className="confirmation-modal__button"
            onClick={reqModalVisibility}
          >
            <img src={closeIcon} alt="Close-modal-icon" />
          </button>
          <h2 className="confirmation-modal__title">
            Спасибо за обращение в наш банк.
          </h2>
          <p className="confirmation-modal__text">
            Наш менеджер скоро свяжется с вами по указанному номеру телефона.
          </p>
        </div>
      </Modal>
    </form>
  );
};
