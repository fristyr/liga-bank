import React, { FC, FormEvent, useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import classNames from 'classnames';
import { Input } from '../Form/Input';
import closeIcon from '../../assets/close-icon.svg';
import './ApplicationRequest.scss';

interface Props {
  selectValue?: number | null;
  priceValue?: number;
  initialFee?: number;
  years?: number;
  setApllicationForm?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ApplicationRequest: FC<Props> = ({
  selectValue,
  priceValue,
  initialFee,
  years,
  setApllicationForm,
}) => {
  const [reqCredentials, setReqCredentials] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [reqConfirmModal, setReqConfirmModal] = useState(false);
  const [submitButtonState, setSubmitButtonState] = useState(true);

  const [loanNumber, setLoanNumber] = useState(10);

  const { name, phone, email } = reqCredentials;

  useEffect(() => {
    if (name.length && phone.length && email.length >= 5) {
      setSubmitButtonState(false);
    } else {
      setSubmitButtonState(true);
    }
  }, [name, phone, email]);

  const loanPurpose = () => {
    let v = '';
    if (selectValue === 1) v = 'Ипотека';
    if (selectValue === 2) v = 'Автокредит';
    if (selectValue === 3) v = 'Потребительский кредит';
    return v;
  };

  const loanName = () => {
    let v = '';
    if (selectValue === 1) v = 'Стоимость недвижимости';
    if (selectValue === 2) v = 'Стоимость автомобиля';
    if (selectValue === 3) v = 'Сумма кредита';
    return v;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setReqCredentials({ ...reqCredentials, name: '', phone: '', email: '' });
    setLoanNumber((prev) => prev + 1);
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

    setReqConfirmModal(true);
  };

  const reqModalVisibility = () => {
    setApllicationForm(false);
    setReqConfirmModal(!reqConfirmModal);
  };

  const data = [
    { title: 'Номер заявки', description: `№ 00${loanNumber}`, id: '1' },
    { title: 'Цель кредита', description: loanPurpose(), id: '2' },
    {
      title: loanName(),
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
            inputValue={name}
            autoFocus={true}
            inputType="text"
          />
        </div>
        <div className="grid-input">
          <Input
            inputPlaceholder="Телефон"
            inputClassName="grid-input__el grid-input__el--phone"
            onInputChange={(e: string) => {
              setReqCredentials({ ...reqCredentials, phone: e });
            }}
            inputValue={phone}
            inputType="tel"
          />
          <Input
            inputPlaceholder="E-mail"
            inputClassName="grid-input__el "
            onInputChange={(e: string) => {
              setReqCredentials({ ...reqCredentials, email: e });
            }}
            inputValue={email}
            inputType="email"
          />
        </div>
      </div>
      <button
        disabled={submitButtonState}
        type="submit"
        className={classNames('button application-form__button', {
          'button--disabled': submitButtonState,
        })}
      >
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
