import React, { FC, FormEvent, useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import classNames from 'classnames';
import { Input } from '../Form/Input';
import closeIcon from '../../assets/close-icon.svg';
import { useTranslation } from 'react-i18next';

import './ApplicationRequest.scss';

interface Props {
  selectValue?: number | null;
  priceValue?: number;
  initialFee?: number;
  years?: number;
  setApllicationForm?: React.Dispatch<React.SetStateAction<boolean>>;
  loanNumber?: number;
  setLoanNumber?: React.Dispatch<React.SetStateAction<number>>;
}

export const ApplicationRequest: FC<Props> = ({
  selectValue,
  priceValue,
  initialFee,
  years,
  setApllicationForm,
  loanNumber,
  setLoanNumber,
}) => {
  const [reqCredentials, setReqCredentials] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [reqConfirmModal, setReqConfirmModal] = useState(false);
  const [submitButtonState, setSubmitButtonState] = useState(true);

  const { name, phone, email } = reqCredentials;

  const { t } = useTranslation();

  useEffect(() => {
    if (name.length && phone.length && email.length >= 5) {
      setSubmitButtonState(false);
    } else {
      setSubmitButtonState(true);
    }
  }, [name, phone, email]);

  useEffect(() => {
    if (window.innerWidth < 768)
      window.scrollTo({ top: 1700, behavior: 'smooth' });

    if (window.innerWidth < 400)
      window.scrollTo({ top: 1850, behavior: 'smooth' });

    if (window.innerWidth > 768)
      window.scrollTo({ top: 2000, behavior: 'smooth' });
  });

  const loanPurpose = () => {
    let v = '';
    if (selectValue === 1) v = t('loan.purpose.0');
    if (selectValue === 2) v = t('loan.purpose.1');
    if (selectValue === 3) v = t('loan.purpose.2');
    return v;
  };

  const loanName = () => {
    let v = '';
    if (selectValue === 1) v = t('loan.name.0');
    if (selectValue === 2) v = t('loan.name.1');
    if (selectValue === 3) v = t('loan.name.2');
    return v;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setReqCredentials({ ...reqCredentials, name: '', phone: '', email: '' });

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
    setLoanNumber(loanNumber + 1);
    setApllicationForm(false);
    setReqConfirmModal(!reqConfirmModal);
  };

  const regexReplace = /\B(?=(\d{3})+(?!\d))/g;

  const data = [
    { title: t('loan.title.0'), description: `№ 00${loanNumber}`, id: '1' },
    { title: t('loan.title.1'), description: loanPurpose(), id: '2' },
    {
      title: loanName(),
      description: `${priceValue
        .toFixed(0)
        .toString()
        .replace(regexReplace, ' ')} ${t('calculator.currencyName')}`,
      id: '3',
    },
    {
      title: t('loan.title.2'),
      description: `${initialFee
        .toFixed(0)
        .toString()
        .replace(regexReplace, ' ')} ${t('calculator.currencyName')}`,
      id: '4',
    },
    {
      title: t('loan.title.3'),
      description: `${years} ${t('calculator.term.1')}`,
      id: '5',
    },
  ];

  return (
    <form
      className="application-form"
      onSubmit={handleSubmit}
      //id="application-form"
    >
      <h2 className="calculator__step application-form__title">
        {t('calculator.steps.2')}
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
            inputPlaceholder={t('loan.input.0')}
            onInputChange={(e: string) => {
              setReqCredentials({ ...reqCredentials, name: e });
            }}
            inputValue={name}
            autoFocus={true}
            inputType="text"
            inputRequired={true}
          />
        </div>
        <div className="grid-input">
          <Input
            inputPlaceholder={t('loan.input.1')}
            inputClassName="grid-input__el grid-input__el--phone"
            onInputChange={(e: string) => {
              setReqCredentials({ ...reqCredentials, phone: e });
            }}
            inputValue={phone}
            inputType="number"
            inputRequired={true}
          />
          <Input
            inputPlaceholder={t('loan.input.2')}
            inputClassName="grid-input__el "
            onInputChange={(e: string) => {
              setReqCredentials({ ...reqCredentials, email: e });
            }}
            inputValue={email}
            inputType="email"
            inputRequired={true}
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
        {t('loan.button')}
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
          <h2 className="confirmation-modal__title">{t('loan.submit.0')}</h2>
          <p className="confirmation-modal__text">{t('loan.submit.1')}</p>
        </div>
      </Modal>
    </form>
  );
};
