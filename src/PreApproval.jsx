import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from '@formspree/react';
import './assets/css/PreApproval.css';

export default function PreApproval() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const zipRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [state, handleSubmit] = useForm("xgvyrkoo");

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
    const validPhone = validateKeyUp(/^[0-9]{10,11}$/, phoneRef.current.value, 'phone', 'Must be 10-11 digits');
    const validEmail = validateKeyUp(/^[A-Za-z_0-9ñÑà-ü-]{3,20}@[A-Za-z0-9]{3,8}\.[A-Za-z]{3}$/, emailRef.current.value, 'email', 'Invalid email format');
    const validName = validateKeyUp(/^[A-Za-z\sñÑà-ü]{3,30}$/, nameRef.current.value, 'name', 'Only letters, 3-30 characters');
    const validZip = validateKeyUp(/^[0-9]{5,8}$/, zipRef.current.value, 'zip', '5–8 digit postal code');

    if (!validName || !validPhone || !validEmail || !validZip) {
      Swal.fire({ icon: 'error', title: 'Validation error', text: 'Check your inputs and try again' });
    }

    return validName && validPhone && validEmail && validZip;
  };

  const customSubmit = async e => {
    e.preventDefault();
    if (validateForm()) {
      await handleSubmit(e);
      if (state.succeeded) {
        Swal.fire({ icon: 'success', title: 'Request Sent', text: 'We’ll contact you soon!' });
      }
    }
  };

  return (
    <div className="form-wrapper">
      <h2 className="text-center mb-4">Get Pre-Approved</h2>
      <form onSubmit={customSubmit}>
        <div className='row'>
          <div className="col-md-4 mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              ref={nameRef}
              maxLength={30}
              onKeyPress={e => validateKeyPress(/^[A-Za-z\sñÑà-ü]$/, e)}
              onKeyUp={e => validateKeyUp(/^[A-Za-z\sñÑà-ü]{3,30}$/, e.target.value, 'name', 'Only letters, 3-30 characters')}
              required
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              ref={phoneRef}
              maxLength={11}
              onKeyPress={e => validateKeyPress(/^[0-9]$/, e)}
              onKeyUp={e => validateKeyUp(/^[0-9]{10,11}$/, e.target.value, 'phone', 'Must be 10-11 digits')}
              required
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label">Zip Code</label>
            <input
              type="text"
              name="zip"
              ref={zipRef}
              className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
              maxLength={8}
              onKeyPress={e => validateKeyPress(/^[0-9]$/, e)}
              onKeyUp={e => validateKeyUp(/^[0-9]{5,8}$/, e.target.value, 'zip', '5–8 digit postal code')}
              required
            />
            {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
          </div>
        </div>

        <div className='row'>
          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              ref={emailRef}
              onKeyPress={e => validateKeyPress(/^[A-Za-z@_.0-9ñÑà-ü-]$/, e)}
              onKeyUp={e => validateKeyUp(/^[A-Za-z_0-9ñÑà-ü-]{3,20}@[A-Za-z0-9]{3,8}\.[A-Za-z]{3}$/, e.target.value, 'email', 'Invalid email format')}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Down Payment</label>
            <input type="text" name="downPayment" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">What type of car are you looking for?</label>
          <input type="text" name="carType" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Submit'}
        </button>

        {state.succeeded && <p className="text-success mt-2 text-center">✅ Thanks! We’ll be in touch.</p>}
      </form>
    </div>
  );
}