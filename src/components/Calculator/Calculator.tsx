/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState, useEffect } from 'react';
import InputNumber from 'rc-input-number';
import ReactSlider from 'react-slider';
import { Select } from '../Form/Select';
import { Checkbox } from '../Form/Checkbox';
import { ApplicationRequest } from '../ApplicationRequest';
import { publicSrc } from '../../constants/publicSource';
import { useTranslation } from 'react-i18next';

import classNames from 'classnames';
import './Calculator.scss';

export const Calculator: FC = () => {
  const [selectValue, setSelectValue] = useState(null);

  const [priceValue, setPriceValue] = useState(1);
  const [initialFee, setInitialFee] = useState(1);

  const [percent, setPercent] = useState(10);

  const [years, setYears] = useState(2);
  // eslint-disable-next-line
  const [maternityCapital, setmMternityCapital] = useState(false);

  const [psValue, setPsValue] = useState(9.4);
  const [cascoValue, setCascoValue] = useState(false);
  const [lifeInsurance, setLifeInsrunce] = useState(false);
  // eslint-disable-next-line
  const [bankParticipant, setBankParticipant] = useState(false);

  const [applicationForm, setApllicationForm] = useState(false);

  const [finalSum, setFinalSum] = useState(0);

  const [loanNumber, setLoanNumber] = useState(10);

  const { t } = useTranslation();

  const onChange = (value: number) => {
    setPriceValue(value);
  };
  const onChangeInitialFee = (value: number) => {
    setInitialFee(value);
    setPercent((value / priceValue) * 100);
  };
  const onYearChange = (value: number) => {
    setYears(value);
  };

  /*   useEffect(() => {
    if (selectValue === 1) {
      if (percent > 15) setPsValue(8.5);
      if (percent < 15) setPsValue(9.4);
    }
  }, [selectValue, percent]); */

  useEffect(() => {
    if (selectValue === 1) setPercent(10);
    if (selectValue === 2) setPercent(20);
    setPriceValue(2000000);
    setYears(2);
  }, [selectValue]);

  useEffect(() => {
    if (selectValue === 1) {
      if (percent < 15) setPsValue(9.4);
      if (percent >= 15) setPsValue(8.5);
    }
    if (selectValue === 2) {
      if (priceValue < 2000000) setPsValue(16);
      if (priceValue >= 2000000) setPsValue(15);
      if (cascoValue || lifeInsurance) {
        setPsValue(8.5);
      }
      if (cascoValue && lifeInsurance) {
        setPsValue(3.5);
      }
    }
    if (selectValue === 3) {
      if (priceValue >= 2000000) setPsValue(9.5);

      if (priceValue < 2000000) setPsValue(12.5);

      if (priceValue < 750000) setPsValue(15);
    }
  }, [selectValue, percent, priceValue, cascoValue, lifeInsurance]);

  useEffect(() => {
    setInitialFee((priceValue / 100) * percent);
    if (percent < 10) setPercent(10);
  }, [priceValue, percent]);

  useEffect(() => {
    setFinalSum(priceValue - initialFee);
    maternityCapital
      ? setFinalSum((prevVall) => prevVall - 470000)
      : setFinalSum((prevVall) => prevVall);
  }, [maternityCapital, priceValue, initialFee]);

  const downHandler = (
    <div className="cost-coltroll__button">
      <img src={`${publicSrc}/assets/minus.svg`} alt="minus-cost" />
    </div>
  );
  const upHandler = (
    <div className="cost-coltroll__button">
      <img src={`${publicSrc}/assets/plus.svg`} alt="plus-cost" />
    </div>
  );

  const minPriceValue = () => {
    let v;
    if (selectValue === 1) v = 1200000;
    if (selectValue === 2) v = 500000;
    if (selectValue === 3) v = 50000;
    return v;
  };

  const maxPriceValue = () => {
    let v;
    if (selectValue === 1) v = 25000000;
    if (selectValue === 2) v = 5000000;
    if (selectValue === 3) v = 3000000;
    return v;
  };

  const regexReplace = /\B(?=(\d{3})+(?!\d))/g;

  const SK = selectValue !== 3 ? finalSum : priceValue;

  const returnPs = () => {
    let PS;

    if (selectValue === 1) {
      PS = percent <= 15 ? 0.00783 : 0.00708;
    } else {
      PS = psValue / 100 / 12;
    }
    return PS;
  };
  const PS = returnPs();

  const KP = years * 12;

  const AP = (SK * (PS + PS / (Math.pow(1 + PS, KP) - 1))).toFixed(0);

  const reqIncome = Number(AP) * 2.22247;

  const offerDescriptionText = () => {
    let v = '';
    if (selectValue === 1) v = t('calculator.bankOfferTitle.0');
    if (selectValue === 2) v = t('calculator.bankOfferTitle.1');
    if (selectValue === 3) v = t('calculator.bankOfferTitle.2');
    return v;
  };

  const psValueText = () => {
    let percentVal;

    if (selectValue === 1) {
      percentVal = `${psValue} %`;
    }

    if (selectValue === 2) {
      percentVal = `${psValue} %`;
    }
    if (selectValue === 3) {
      percentVal = `${psValue} %`;
    }
    return percentVal;
  };

  const maxPeriod = () => {
    let period;
    if (selectValue === 1) {
      period = 30;
    }
    if (selectValue === 2) {
      period = 5;
    }
    if (selectValue === 3) {
      period = 7;
    }
    return period;
  };

  const offerOptions = [
    {
      id: 1,
      title: `${finalSum.toFixed(0).toString().replace(regexReplace, ' ')} ${t(
        'calculator.currencyName'
      )}`,
      description: offerDescriptionText(),
    },
    {
      id: 2,
      title: psValueText(),
      description: t('calculator.bankOfferDescription.0'),
    },
    {
      id: 3,
      title: `${Number(AP)
        .toFixed(0)
        .toString()
        .replace(regexReplace, ' ')} ${t('calculator.currencyName')}`,
      description: t('calculator.bankOfferDescription.1'),
    },
    {
      id: 4,
      title: `${reqIncome.toFixed(0).toString().replace(regexReplace, ' ')} ${t(
        'calculator.currencyName'
      )}`,
      description: t('calculator.bankOfferDescription.2'),
    },
  ];

  const onReqSubmit = () => {
    setApllicationForm(true);
  };

  const calculatorData = {
    selectValue,
    priceValue,
    initialFee,
    years,
    loanNumber,
    setLoanNumber,
  };

  return (
    <section className="calculator" id="calculator">
      <div className="calculator__options">
        <h2 className="calculator__title">{t('calculator.title')}</h2>
        <p className="calculator__step">{t('calculator.steps.0')}</p>
        <div className="calculator__select-purpose">
          <Select onSelectChanged={setSelectValue} />
        </div>
        {selectValue && (
          <div className="calculator__parametrs">
            <h2 className="calculator__step">
              {t('calculator.steps.1')}
            </h2>
            <p className="calculator__description">
              {selectValue === 1 && t('calculator.descriptionName.0')}
              {selectValue === 2 && t('calculator.descriptionName.1')}
              {selectValue === 3 && t('calculator.descriptionName.2')}
            </p>
            <label
              className={classNames('cost-coltroll', {
                'cost-coltroll--error':
                  /^(.*[a-zA-Z].*)$/.test(priceValue.toString()) ||
                  priceValue < minPriceValue(),
              })}
              htmlFor="cost-value"
            >
              <div className="values">
                <InputNumber
                  prefixCls="values__prefix"
                  aria-label="Number input example that demonstrates custom styling"
                  value={priceValue}
                  min={minPriceValue()}
                  max={maxPriceValue()}
                  downHandler={downHandler}
                  upHandler={upHandler}
                  onChange={onChange}
                  step={selectValue === 3 ? 50000 : 100000}
                  formatter={(value: Number) =>
                    `${value}`.replace(regexReplace, ' ')
                  }
                  id="cost-value"
                  pattern="[0-9]{10}"
                />
                <span className="values__sign"> {t('calculator.currencyName')} </span>

                {priceValue < minPriceValue() && (
                  <span className="values__sign--error-block">
                    {t('calculator.errorText')}
                  </span>
                )}
                {/^(.*[a-zA-Z].*)$/.test(priceValue.toString()) && (
                  <span className="values__sign--error-block">
                    {t('calculator.errorText')}
                  </span>
                )}
              </div>
            </label>
            <span className="calculator__price-gap">
              {selectValue === 1 && t('calculator.priceGap.0')}
              {selectValue === 2 && t('calculator.priceGap.1')}
              {selectValue === 3 && t('calculator.priceGap.2')}
            </span>

            {selectValue !== 3 && (
              <div className="initial-fee-wrapp">
                <p className="calculator__description">{t('calculator.initialFee')}</p>
                <label
                  className="cost-coltroll cost-coltroll--fee"
                  htmlFor="initial-fee"
                >
                  <InputNumber
                    prefixCls="values__prefix values__prefix--fee"
                    aria-label="Number input example that demonstrates custom styling"
                    value={isFinite(initialFee) ? initialFee : 0}
                    onChange={onChangeInitialFee}
                    step={100000}
                    decimalSeparator="."
                    formatter={(value: Number) =>
                      `${value}`.replace(regexReplace, ' ')
                    }
                    id="initial-fee"
                    pattern="[0-9]{10}"
                  />
                  <span className="values__sign"> {t('calculator.currencyName')} </span>
                </label>
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="horizontal-slider__thumb"
                  trackClassName="horizontal-slider__track"
                  renderThumb={(props) => <div {...props} />}
                  value={percent}
                  step={5}
                  min={selectValue === 1 ? 10 : 20}
                  max={100}
                  onChange={(value: unknown) => setPercent(Number(value))}
                />
                <span className="calculator__price-gap">
                  {Math.trunc(percent * 100) / 100}%{' '}
                </span>
              </div>
            )}

            <p className="calculator__description calculator__description--term">
            {t('calculator.term.0')}
            </p>
            <label
              className="cost-coltroll cost-coltroll--term"
              htmlFor="loan-terms"
            >
              <div className="values">
                <InputNumber
                  prefixCls="values__prefix values__prefix--term"
                  aria-label="Number input example that demonstrates custom styling"
                  value={years}
                  min={years}
                  max={maxPeriod()}
                  onChange={onYearChange}
                  step={100000}
                  formatter={(value: Number) =>
                    `${value}`.replace(regexReplace, ' ')
                  }
                  id="loan-terms"
                  pattern="[0-9]{10}"
                />
                <span className="values__sign"> {t('calculator.term.1')} </span>
              </div>
            </label>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="horizontal-slider__thumb"
              trackClassName="horizontal-slider__track"
              renderThumb={(props) => <div {...props} />}
              min={1}
              step={1}
              max={maxPeriod()}
              value={years}
              onChange={(value: unknown) => setYears(Number(value))}
            />
            <div className="calculator__price-gap">
              <span>{years} {t('calculator.term.1')}</span>
              <span>{maxPeriod()} {t('calculator.term.1')}</span>
            </div>
            {selectValue === 1 && (
              <Checkbox
                checboxLabel={t('calculator.checkBoxNames.0')}
                id="maternity-capital"
                onCheckboxChange={(v: boolean) => {
                  setmMternityCapital(v);
                }}
              />
            )}

            {selectValue === 2 && (
              <div>
                <Checkbox
                  checboxLabel={t('calculator.checkBoxNames.1')}
                  id="casco"
                  onCheckboxChange={(v: boolean) => {
                    setCascoValue(v);
                  }}
                />
                <Checkbox
                  checboxLabel={t('calculator.checkBoxNames.2')}
                  id="life-insurance"
                  onCheckboxChange={(v: boolean) => {
                    setLifeInsrunce(v);
                  }}
                />
              </div>
            )}

            {selectValue === 3 && (
              <Checkbox
                id="consumer-credit"
                checboxLabel={t('calculator.checkBoxNames.3')}
                onCheckboxChange={(v: boolean) => {
                  setBankParticipant(v);
                  v ? setPsValue(psValue - 0.5) : setPsValue(psValue + 0.5);
                }}
              />
            )}
          </div>
        )}
      </div>

      {selectValue && (
        <div className="calculator__offer">
          {(selectValue === 1 && priceValue - initialFee > 500000) ||
          (selectValue === 2 && priceValue - initialFee > 200000) ||
          selectValue === 3 ? (
            <div className="bank-offer">
              <h2 className="bank-offer__title"> {t('calculator.offer')}</h2>
              <div className="bank-offer__options ">
                {offerOptions.map(({ id, title, description }) => (
                  <div className="offer-option" key={id}>
                    <p className="offer-option__title">{title}</p>
                    <span className="offer-option__description">
                      {description}
                    </span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className=" button bank-offer__button"
                onClick={onReqSubmit}
              >
                {t('calculator.bankOfferButton')}
              </button>
            </div>
          ) : (
            <div className="calculator__offer">
              <div className="bank-offer bank-offer--no-offer">
                <h2 className="bank-offer__title">
                  {t('calculator.bankOfferError.0')}{' '}
                  <span>
                    {selectValue === 1 && 'ипотечные'}
                    {selectValue === 2 && 'автокредиты'}
                  </span>{' '}
                  <br />
                  {t('calculator.bankOfferError.1')}{' '}
                  <span>
                    {selectValue === 1 && '500 000'}
                    {selectValue === 2 && '200 000'}
                  </span>
                  {t('calculator.currencyName')}
                </h2>
                <p className="offer-option__description">
                  {t('calculator.bankOfferError.2')}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      {applicationForm && (
        <ApplicationRequest
          {...calculatorData}
          setApllicationForm={setApllicationForm}
        />
      )}
    </section>
  );
};
