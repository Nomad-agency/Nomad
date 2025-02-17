import React from 'react';
import InputSection from '../InputSection/InputSection';

const FormSection = () => {
  return (
    <form className="grid grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-20 xl:gap-[100px] mt-10 sm:mt-12">
      <InputSection type="text" placeholder="Имя" />
      <InputSection type="text" placeholder="Проект" />
      <InputSection type="email" placeholder="Почта" />
      <InputSection type="text" placeholder="Бюджет" />

      <button type="submit" className="bg-secondary text-white py-[10px] rounded-[15px] col-span-2 lg:col-span-1">
        Отправить
      </button>
    </form>
  );
};

export default FormSection;
