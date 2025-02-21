import React, { useState } from 'react';
import InputSection from '../InputSection/InputSection';
import emailjs from '@emailjs/browser';
const FormSection = () => {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [mail, setMail] = useState("");
  const [budget, setBudget] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS service ID, template ID, and public key
    const serviceId = 'service_9z33cas';
    const templateId = 'template_t9ewhcd';
    const publicKey = 'XCJKd_CXhpWlFmiqH';

    // object that contains dynamic template params
    const templateParams = {
      from_name: name,
      project: project,
      mail: mail,
      budget: budget,
    };
    // send email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setName("");
        setProject("");
        setMail("");
        setBudget("");
        alert("Письмо успешно отправлено");
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  }
  return (
    <form 
      className="grid grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-20 xl:gap-[100px] mt-10 sm:mt-12"
      onSubmit={handleSubmit}
    >
      <InputSection 
        type="text" 
        placeholder="Имя" 
        value={name}
        setValue={setName}
      />
      <InputSection 
        type="text" 
        placeholder="Проект" 
        value={project}
        setValue={setProject}
      />
      <InputSection 
        type="email"
        placeholder="Почта" 
        value={mail}
        setValue={setMail}
      />
      <InputSection 
        type="text" 
        placeholder="Бюджет" 
        value={budget}
        setValue={setBudget}
      />

      <button type="submit" className="bg-secondary text-white py-[10px] rounded-[15px] col-span-2 lg:col-span-1">
        Отправить
      </button>
    </form>
  );
};

export default FormSection;
