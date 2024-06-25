import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalInfo from './Components/PersonalInfo';
import AddressInfo from './Components/AddressInfo';
import Confirmation from './Components/Confirmation';
import FormNavigation from './Components/FormNavigation';


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const validate = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
    } else if (step === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) newErrors.zip = 'Zip Code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="container mt-5">
      <h2>Multi-Step Form</h2>
      {step === 1 && <PersonalInfo formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 2 && <AddressInfo formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 3 && <Confirmation formData={formData} />}
      <FormNavigation step={step} handleBack={handleBack} handleNext={handleNext} />
    </div>
  );
}

export default App;
