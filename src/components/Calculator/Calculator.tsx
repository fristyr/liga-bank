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
  // eslint-disable-next-line
  const [initialFee, setInitialFee] = useState(0);

  // eslint-disable-next-line
  const [percent, setPercent] = useState(
    selectValue === 1 ? 10 : selectValue === 2 ? 20 : 0
  );

  const [yaers, setYears] = useState(5);
  // eslint-disable-next-line
  const [maternityCapital, setmMternityCapital] = useState(false);

  const onChange = (value: number) => {
    setPriceValue(value);
    //nitialFee/value*100)
    //setPercent((initialFee / priceValue) * 100)
  };
  const onChangeInitialFee = (value: any) => {
    setInitialFee(value);
    setPercent((value / priceValue) * 100);
  };
  const onYearChange = (value: number) => {
    setYears(value);
  };

  useEffect(() => {
    setInitialFee((priceValue / 100) * percent);
    if (percent < 10) setPercent(10);
  }, [priceValue, percent]);

  useEffect(() => {
    setPercent(selectValue === 1 ? 10 : selectValue === 2 ? 20 : 0);
  }, [selectValue]);

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

  const initialFeePercent = selectValue === 1 ? 10 : selectValue === 2 ? 20 : 0;

  return (
    <section className="calculator">
      <h2 className="calculator__title">Кредитный калькулятор</h2>
      <p className="calculator__step">Шаг 1. Цель кредита</p>
      <div className="calculator__select-purpose">
        <Select onSelectChanged={setSelectValue} />
      </div>
      {selectValue && (
        <div className="calculator__parametrs">
          <h2 className="calculator__step">Шаг 2. Введите параметры кредита</h2>
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
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
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
                min={5}
                max={30}
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
            min={5}
            step={1}
            max={30}
            onChange={(value: any) => setYears(value)}
          />
          <span className="calculator__price-gap">{yaers} лет</span>
          <Checkbox
            onCheckboxChange={setmMternityCapital}
            maternityCapital={setPriceValue}
            priceValue={priceValue}
          />
          
          { selectValue === 2 && (
            <div>
              
            </div>
          ) }
        </div>
      )}
    </section>
  );
};
