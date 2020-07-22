/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState, useEffect } from 'react';
import InputNumber from 'rc-input-number';
import ReactSlider from 'react-slider';
import { Select } from '../Form/Select';
import { Checkbox } from '../Form/Checkbox';
import { ApplicationRequest } from '../ApplicationRequest';
import { publicSrc } from '../../constants/publicSource';

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

  /* useEffect(() => {
    if (selectValue === 2) {
      setPsValue(15);

      cascoValue && lifeInsurance ? setPsValue(3.5) : setPsValue(8.5);
    }
  }, [selectValue, priceValue, cascoValue, lifeInsurance]); */

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
    if (selectValue === 1) v = 'Сумма ипотеки';
    if (selectValue === 2) v = 'Сумма автокредита';
    if (selectValue === 3) v = 'Сумма кредита';
    return v;
  };

  const psValueText = () => {
    let percentVal;

    /* if (selectValue === 1 && percent <= 15) {
      percentVal = '9.4 %';
    } else {
      percentVal = '8.5 %';
    } */

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
      title: `${finalSum
        .toFixed(0)
        .toString()
        .replace(regexReplace, ' ')} рублей`,
      description: offerDescriptionText(),
    },
    {
      id: 2,
      title: psValueText(),
      description: 'Процентная ставка',
    },
    {
      id: 3,
      title: `${Number(AP)
        .toFixed(0)
        .toString()
        .replace(regexReplace, ' ')} рублей`,
      description: 'Ежемесячный платеж',
    },
    {
      id: 4,
      title: `${reqIncome
        .toFixed(0)
        .toString()
        .replace(regexReplace, ' ')} рублей`,
      description: 'Необходимый доход',
    },
  ];

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
        <h2 className="calculator__title">Кредитный калькулятор</h2>
        <p className="calculator__step">Шаг 1. Цель кредита</p>
        <div className="calculator__select-purpose">
          <Select onSelectChanged={setSelectValue} />
        </div>
        {selectValue && (
          <div className="calculator__parametrs">
            <h2 className="calculator__step">
              Шаг 2. Введите параметры кредита
            </h2>
            <p className="calculator__description">
              {selectValue === 1 && 'Стоимость недвижимости'}
              {selectValue === 2 && 'Стоимость автомобиля'}
              {selectValue === 3 && 'Сумма потребительского кредита!'}
            </p>
            <label className="cost-coltroll" htmlFor="cost-value">
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
                <span className="values__sign"> рублей </span>
              </div>
            </label>
            <span className="calculator__price-gap">
              {selectValue === 1 && 'От 1 200 000 до 25 000 000 рублей'}
              {selectValue === 2 && 'От 500 000 до 5 000 000 рублей'}
              {selectValue === 3 && 'От 50 000 до 3 000 000 рублей'}
            </span>

            {selectValue !== 3 && (
              <div className="initial-fee-wrapp">
                <p className="calculator__description">Первоначальный взнос</p>
                <label
                  className="cost-coltroll cost-coltroll--fee"
                  htmlFor="initial-fee"
                >
                  <InputNumber
                    prefixCls="values__prefix values__prefix--fee"
                    aria-label="Number input example that demonstrates custom styling"
                    value={initialFee}
                    onChange={onChangeInitialFee}
                    step={100000}
                    decimalSeparator="."
                    formatter={(value: Number) =>
                      `${value}`.replace(regexReplace, ' ')
                    }
                    id="initial-fee"
                    pattern="[0-9]{10}"
                  />
                  <span className="values__sign"> рублей </span>
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
              Срок кредитования
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
                <span className="values__sign"> лет </span>
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
              <span>{years} лет</span>
              <span>{maxPeriod()} лет</span>
            </div>
            {selectValue === 1 && (
              <Checkbox
                checboxLabel="Использовать материнский капитал"
                id="maternity-capital"
                onCheckboxChange={(v: boolean) => {
                  setmMternityCapital(v);
                }}
              />
            )}

            {selectValue === 2 && (
              <div>
                <Checkbox
                  checboxLabel="Оформить КАСКО в нашем банке"
                  id="casco"
                  onCheckboxChange={(v: boolean) => {
                    setCascoValue(v);
                  }}
                />
                <Checkbox
                  checboxLabel="Оформить Страхование жизни в нашем банке"
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
                checboxLabel="Участник зарплатного проекта нашего банка"
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
              <h2 className="bank-offer__title">Наше предложение</h2>
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
              <a
                href="#application-form"
                type="button"
                className=" button bank-offer__button"
                onClick={() => setApllicationForm(true)}
              >
                Оформить заявку
              </a>
            </div>
          ) : (
            <div className="calculator__offer">
              <div className="bank-offer bank-offer--no-offer">
                <h2 className="bank-offer__title">
                  Наш банк не выдаёт{' '}
                  <span>
                    {selectValue === 1 && 'ипотечные'}
                    {selectValue === 2 && 'автокредиты'}
                  </span> <br/>
                  кредиты меньше {' '}
                  <span>
                    {selectValue === 1 && '500 000'}
                    {selectValue === 2 && '200 000'}
                  </span>
                  рублей
                </h2>
                <p className="offer-option__description">
                  Попробуйте использовать другие параметры для расчёта.
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
