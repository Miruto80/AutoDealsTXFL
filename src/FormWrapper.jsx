import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from '@formspree/react';
import './assets/css/FormWrapper.css';

export default function FormWrapper({ type }) {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const zipRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [state, handleSubmit] = useForm("xgvyrkoo");
  const [consent, setConsent] = useState(false);
  const formRef = useRef(null);

  const validateKeyPress = (er, e) => {
    const key = e.keyCode || e.which;
    const tecla = String.fromCharCode(key);
    if (!er.test(tecla)) {
      e.preventDefault();
    }
  };

  const validateKeyUp = (er, value, field, message) => {
    if (er.test(value)) {
      setErrors(prev => ({ ...prev, [field]: '' }));
      return true;
    } else {
      setErrors(prev => ({ ...prev, [field]: message }));
      return false;
    }
  };

  const validateForm = () => {
  const validName = validateKeyUp(/^[A-Za-z\sñÑà-ü]{3,30}$/, nameRef.current.value, 'name', 'Only letters, 3-30 characters');
  const validPhone = validateKeyUp(/^[0-9]{10,11}$/, phoneRef.current.value, 'phone', 'Must be 10-11 digits');
  const validEmail = validateKeyUp(
    /^[A-Za-z_0-9ñÑà-ü-]{3,20}@[A-Za-z0-9]{3,8}\.[A-Za-z]{3}$/,
    emailRef.current.value,
    'email',
    'Invalid email format'
  );

  if (!validName || !validPhone || !validEmail) {
    Swal.fire({
      icon: 'error',
      title: 'Check your inputs',
      text: 'All required fields must be valid',
    });
    return false;
  }

  if (!consent) {
    Swal.fire({
      icon: 'warning',
      title: 'Consent Required',
      text: 'Please agree to the terms before submitting.',
    });
    return false;
  }

  return true;
};

  const customSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    await handleSubmit(e);

    if (state.succeeded) {
      Swal.fire({
        icon: 'success',
        title: 'Form submitted!',
        text: 'We’ll get back to you soon.',
      });

      // 🔁 Limpieza total
      formRef.current?.reset();
      setConsent(false);
      setErrors({});
    }
  }
};

  const renderCommonFields = () => (
    <>
      <div className="col-md-4 mb-3">
        <label>Full Name</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          maxLength={30}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          onKeyPress={e => validateKeyPress(/^[A-Za-z\sñÑà-ü]$/, e)}
          onKeyUp={e => validateKeyUp(/^[A-Za-z\sñÑà-ü]{3,30}$/, e.target.value, 'name', 'Only letters, 3-30 characters')}
          required
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="col-md-4 mb-3">
        <label>Email</label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          onKeyPress={e => validateKeyPress(/^[A-Za-z@_.0-9ñÑà-ü-]$/, e)}
          onKeyUp={e => validateKeyUp(/^[A-Za-z_0-9ñÑà-ü-]{3,20}@[A-Za-z0-9]{3,8}\.[A-Za-z]{3}$/, e.target.value, 'email', 'Invalid email format')}
          required
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="col-md-4 mb-3">
        <label>Phone</label>
        <input
          ref={phoneRef}
          type="tel"
          name="phone"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          onKeyPress={e => validateKeyPress(/^[0-9]$/, e)}
          onKeyUp={e => validateKeyUp(/^[0-9]{10,11}$/, e.target.value, 'phone', 'Must be 10-11 digits')}
          required
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>
    </>
  );

  const renderForm = () => {
    switch (type) {
      case 'preapproval':
        return (
          <>
            <div className="row">{renderCommonFields()}</div>
            <div className="row">
              <div className="col-md-6 mb-3"><label>Zip Code</label><input name="zip" ref={zipRef} className="form-control" maxLength={8} required /></div>
              <div className="col-md-6 mb-3"><label>Down Payment</label><input name="downPayment" className="form-control" type="number" /></div>
            </div>
            <div className="mb-3"><label>What type of car are you looking for?</label><input name="carType" className="form-control" /></div>
          </>
        );
      case 'tradein':
        return (
          <>
            <div className="row">{renderCommonFields()}</div>
            <div className="row">
              <div className="col-md-4 mb-3"><label>Year</label><input name="year" className="form-control" /></div>
              <div className="col-md-4 mb-3"><label>Make</label><input name="make" className="form-control" /></div>
              <div className="col-md-4 mb-3"><label>Model</label><input name="model" className="form-control" /></div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3"><label>Trim Level (optional)</label><input name="trim" className="form-control" /></div>
              <div className="col-md-6 mb-3"><label>Mileage</label><input name="mileage" className="form-control" /></div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3"><label>VIN (optional)</label><input name="vin" className="form-control" /></div>
              <div className="col-md-6 mb-3"><label>Condition</label><input name="condition" className="form-control" /></div>
            </div>
            <div className="mb-3"><label>Zip Code</label><input name="zip" className="form-control" maxLength={8} required /></div>
          </>
        );
      case 'contact':
        return (
          <>
            <div className="row">{renderCommonFields()}</div>
            <div className="mb-3">
              <label>Message</label>
              <textarea name="message" className="form-control" rows="4" required></textarea>
            </div>
          </>
        );
      default:
        return <p className="text-danger">❌ Invalid form type</p>;
    }
  };

  return (
    <div className="form-wrapper">
      <h2 className="text-center mb-4">
        {type === 'preapproval' ? 'Get Pre-Approved' : type === 'tradein' ? 'Trade-In Evaluation' : 'Contact Us'}
      </h2>
     <form ref={formRef} onSubmit={customSubmit}>
        {renderForm()}
        <div className="form-check mb-3">
  <input
    className="form-check-input"
    type="checkbox"
    id="consentCheck"
    checked={consent}
    onChange={(e) => setConsent(e.target.checked)}
  />
  <label className="form-check-label small" htmlFor="consentCheck">
    By checking the box, I agree to AutoDealsTXFL's <a href="/privacy-policy" target="_blank">Privacy Policy</a> and <a href="/terms-of-use" target="_blank">Terms of Use</a>. I understand that AutoDealsTXFL is a third-party service connecting customers with dealers. I consent to be contacted by AutoDealsTXFL and/or partner dealers via phone, email, and text messages.
  </label>
</div>

        <button className="btn btn-primary w-100" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Submit'}
        </button>
        {state.succeeded && <p className="text-success mt-3 text-center">✅ Submitted successfully!</p>}
      </form>
    </div>
  );
}