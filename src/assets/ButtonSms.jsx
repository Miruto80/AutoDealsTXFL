// components/SmsButton.jsx
import React from 'react';
import './css/ButtonSms.css'

const SmsButton = () => {
  const phoneNumber = '+14692756620';
  const message = encodeURIComponent("Hello I’m interested in one of your vehicle for sale");

  return (
    <a
      href={`sms:${phoneNumber}?&body=${message}`}
      className="sms-button-fixed-center"
    >
      <i className="fa-solid fa-message"></i> Text Us
    </a>
  );
};

export default SmsButton;
