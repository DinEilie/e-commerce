'use client';
import { useFilterStore } from '@/app/stores/Filter';
import React, { useEffect, useState } from 'react';

export default function Price() {
  const store = useFilterStore();
  const [open, setOpen] = useState(false);
  const [slider, setSlider] = useState(0);
  const [sliderPop, setSliderPop] = useState(0);
  const [sliderPopTimer, setSliderPopTimer] = useState(2);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (sliderPopTimer > 0) {
      interval = setInterval(() => {
        setSliderPopTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [sliderPopTimer]);

  const sliderPopStyle = {
    transform: `translateX(${sliderPop}px)`,
  };

  const clampMin = () => {
    let clamped = store.minPrice;
    if (clamped < 0) clamped = 0;
    else if (clamped > store.maxPrice) clamped = store.maxPrice;
    store.setMinPrice(clamped);
  };

  const clampMax = () => {
    let clamped = store.maxPrice;
    if (clamped < store.minPrice) clamped = store.minPrice;
    else if (clamped > 1000) clamped = 1000;
    store.setMaxPrice(clamped);
  };

  return (
    <li>
      <button
        type='button'
        className={`${open ? 'text-red-600' : ''} flex items-center gap-5 text-lg font-semibold`}
        onClick={() => setOpen(!open)}>
        Price
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className={`${open ? '-rotate-0' : '-rotate-180'} h-5 w-5 duration-200`}>
          <path
            fill-rule='evenodd'
            d='M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z'
            clip-rule='evenodd'
          />
        </svg>
      </button>
      <div className={`${open ? 'h-[216px]' : 'h-0'} my-1 ml-5 overflow-hidden duration-200`}>
        <div className=''>
          <div className='mx-auto w-[150px]'>
            <div style={sliderPopStyle} className={`w-fit`}>
              <div
                className={`h-10 w-10 rotate-45 items-center rounded-t-full rounded-bl-full bg-gradient-to-r from-red-600 to-red-400 duration-200 ${
                  sliderPopTimer !== 0 ? 'opacity-100' : 'opacity-0'
                }`}>
                <div className='translate-y-3 -rotate-45 text-center text-xs font-bold text-white'>${slider}</div>
              </div>
            </div>
            <input
              className='h-1 w-full appearance-none bg-gradient-to-r from-red-600 to-red-400 hover:cursor-pointer'
              name='slider'
              type='range'
              min={0}
              max={1000}
              defaultValue={slider}
              onChange={(event) => {
                setSliderPopTimer(3);
                const value = event.target.valueAsNumber;
                const newMin = value < 100 ? 0 : value - 100;
                const newMax = value > 900 ? 1000 : value + 100;
                const diff = value / 1000;
                setSliderPop(130 * diff - 9);
                store.setMinPrice(newMin);
                store.setMaxPrice(newMax);
                setSlider(value);
              }}
            />
          </div>
          <div className='mt-7 flex items-center gap-2 text-center'>
            <div className='flex w-fit gap-2 border p-1'>
              <div className=''>$</div>
              <input
                className='w-16 text-right caret-red-600 outline-red-600'
                maxLength={4}
                value={store.minPrice}
                min={0}
                max={1000}
                onBlur={clampMin}
                onChange={(event) => {
                  store.setMinPrice(event.target.valueAsNumber);
                }}
                type='number'
              />
            </div>{' '}
            -
            <div className='flex w-fit gap-2 border p-1'>
              <div className=''>$</div>
              <input
                className='w-16 text-right caret-red-600 outline-red-600'
                maxLength={4}
                value={store.maxPrice}
                min={0}
                max={1000}
                onBlur={clampMax}
                onChange={(event) => {
                  store.setMaxPrice(event.target.valueAsNumber);
                }}
                type='number'
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
