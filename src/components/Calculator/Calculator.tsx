import React, { FC, useState, useEffect } from 'react';
import { Select, Checkbox } from '../index';
import InputNumber from 'rc-input-number';
import ReactSlider from 'react-slider';
//import Slider from 'rc-slider';

//import 'rc-slider/assets/index.css';

import './Calculator.scss';

export const Calculator: FC = () => {
  const [selectValue, setSelectValue] = useState(1);

  const [priceValue, setPriceValue] = useState(2000000);
  const [initialFee, setInitialFee] = useState(0);

  const [percent, setPercent] = useState(
    selectValue === 1 ? 10 : selectValue === 2 ? 20 : 0
  );

  const [yaers, setYears] = useState(1);
  // eslint-disable-next-line
  const [maternityCapital, setmMternityCapital] = useState(false);

  const [psValue, setPsValue] = useState(9);
  const [cascoValue, setCascoValue] = useState(false);
  const [lifeInsurance, setLifeInsrunce] = useState(false);
  // eslint-disable-next-line
  const [bankParticipant, setBankParticipant] = useState(false);

  const onChange = (value: number) => {
    setPriceValue(value);
  };
  const onChangeInitialFee = (value: any) => {
    setInitialFee(value);
    setPercent((value / priceValue) * 100);
  };
  const onYearChange = (value: number) => {
    setYears(value);
  };

  useEffect(() => {
    if (selectValue === 1) {
      percent <= 15 ? setPsValue(9.4) : setPsValue(8.5);
    }
  });

  useEffect(() => {
    setPercent(selectValue === 1 ? 10 : selectValue === 2 ? 20 : 0);
    setPriceValue(2000000);
    setYears(1)
  }, [selectValue]);

  useEffect(() => {
    if (selectValue === 2) {
      priceValue <= 2000000 ? setPsValue(16) : setPsValue(15);
    }
    if (selectValue === 3) {
      if (priceValue < 750000) setPsValue(15);
      if (priceValue > 750000 && priceValue < 2000000) setPsValue(12.5);
      if (priceValue > 2000000) setPsValue(9.5);
    }
  }, [selectValue, percent, priceValue]);

  useEffect(() => {
    cascoValue && lifeInsurance ? setPsValue(3.5) : setPsValue(8.5);
  }, [selectValue, cascoValue, lifeInsurance]);

  useEffect(() => {
    setInitialFee((priceValue / 100) * percent);
    if (percent < 10) setPercent(10);
  }, [priceValue, percent]);

  const downHandler = (
    <div className="cost-coltroll__button">
      <img
        src={process.env.PUBLIC_URL + '/assets/minus.svg'}
        alt="minus-cost"
      />
    </div>
  );
  const upHandler = (
    <div className="cost-coltroll__button">
      <img src={process.env.PUBLIC_URL + '/assets/plus.svg'} alt="plus-cost" />
    </div>
  );

  const minPriceValue =
    selectValue === 1
      ? 1200000
      : selectValue === 2
      ? 500000
      : selectValue === 3
      ? 50000
      : null;

  const maxPriceValue =
    selectValue === 1
      ? 25000000
      : selectValue === 2
      ? 5000000
      : selectValue === 3
      ? 3000000
      : null;

  const regexReplace = /\B(?=(\d{3})+(?!\d))/g;

  const SK = selectValue !== 3 ? priceValue - initialFee : priceValue;
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

  const KP = yaers * 12;

  const AP = (SK * (PS + PS / (Math.pow(1 + PS, KP) - 1))).toFixed(2);

  const reqIncome = (AP as any) * 2.2;

  const offerOptions = [
    {
      id: 1,
      title: `${(priceValue - initialFee)
        .toString()
        .replace(regexReplace, ' ')} рублей`,
      description:
        selectValue === 1
          ? 'Сумма ипотеки'
          : selectValue === 2
          ? 'Сумма автокредита'
          : selectValue === 3
          ? 'Сумма кредита'
          : '',
    },
    {
      id: 2,
      title: psValue,
      description: 'Процентная ставка',
    },
    {
      id: 3,
      title: AP.toString().replace(regexReplace, ' '),
      description: 'Ежемесячный платеж',
    },
    {
      id: 4,
      title: reqIncome.toFixed(0).toString().replace(regexReplace, ' '),
      description: 'Необходимый доход',
    },
  ];

  return (
    <section className="calculator">
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
              {selectValue === 1
                ? 'Стоимость недвижимости'
                : selectValue === 2
                ? 'Стоимость автомобиля'
                : selectValue === 3
                ? 'Сумма потребительского кредита!'
                : ''}
            </p>
            <label className="cost-coltroll" htmlFor="cost-value">
              <div className="values">
                <InputNumber
                  prefixCls="values__prefix"
                  aria-label="Number input example that demonstrates custom styling"
                  value={priceValue}
                  min={minPriceValue}
                  max={maxPriceValue}
                  downHandler={downHandler}
                  upHandler={upHandler}
                  onChange={onChange}
                  step={100000}
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
              {selectValue === 1
                ? 'От 1 200 000 до 25 000 000 рублей'
                : selectValue === 2
                ? 'От 500 000 до 5 000 000 рублей'
                : selectValue === 3
                ? 'От 50 000 до 3 000 000 рублей'
                : ''}
            </span>

            {selectValue !== 3 && (
              <div className="initial-fee-wrapp">
                <p className="calculator__description">Первоначальный взнос</p>
                <label className="cost-coltroll" htmlFor="initial-fee">
                  <div className="values">
                    <InputNumber
                      prefixCls="values__prefix"
                      aria-label="Number input example that demonstrates custom styling"
                      value={initialFee}
                      min={initialFee}
                      max={maxPriceValue}
                      onChange={onChangeInitialFee}
                      step={100000}
                      formatter={(value: Number) =>
                        `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                      }
                      id="initial-fee"
                      pattern="[0-9]{10}"
                    />
                    <span className="values__sign"> рублей </span>
                  </div>
                </label>
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="horizontal-slider__thumb"
                  trackClassName="horizontal-slider__track"
                  renderThumb={(props) => <div {...props}></div>}
                  value={percent}
                  step={5}
                  min={10}
                  max={100}
                  onChange={(value: any) => setPercent(value)}
                />
                <span className="calculator__price-gap">
                  {Math.trunc(percent * 100) / 100} %{' '}
                </span>
              </div>
            )}

            <p className="calculator__description">Условия кредита</p>
            <label className="cost-coltroll" htmlFor="loan-terms">
              <div className="values">
                <InputNumber
                  prefixCls="values__prefix"
                  aria-label="Number input example that demonstrates custom styling"
                  value={yaers}
                  min={yaers}
                  max={selectValue === 3 ? 7 : 30}
                  onChange={onYearChange}
                  step={100000}
                  formatter={(value: Number) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
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
              renderThumb={(props) => <div {...props}></div>}
              min={1}
              step={1}
              max={selectValue === 3 ? 7 : 30}
              value={yaers}
              onChange={(value: any) => setYears(value)}
            />
            <span className="calculator__price-gap">{yaers} лет</span>
            {selectValue === 1 && (
              <Checkbox
                checboxLabel="Материнский капитал"
                id="maternity-capital"
                onCheckboxChange={(v: boolean) => {
                  setmMternityCapital(v);
                  v
                    ? setPriceValue(priceValue - 470000)
                    : setPriceValue(priceValue + 470000);
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
              <button className=" button bank-offer__button">
                Оформить заявку
              </button>
            </div>
          ) : (
            <div className="calculator__offer">
              <div className="bank-offer bank-offer--no-offer">
                <h2 className="bank-offer__title">
                  Наш банк не выдаёт ипотечные кредиты меньше{' '}
                  <span>
                    {selectValue === 1 && '500 000'}
                    {selectValue === 2 && '200 000'}
                  </span>{' '}
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
    </section>
  );
};
