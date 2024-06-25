import React from 'react';

function AddressInfo({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Step 2: Address Information</h3>
      <div className="form-group">
        <label>Address Line 1</label>
        <input
          type="text"
          className={`form-control ${errors.address1 ? 'is-invalid' : ''}`}
          name="address1"
          value={formData.address1}
          onChange={handleChange}
        />
        {errors.address1 && <div className="invalid-feedback">{errors.address1}</div>}
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input
          type="text"
          className="form-control"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          className={`form-control ${errors.city ? 'is-invalid' : ''}`}
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
      </div>
      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          className={`form-control ${errors.state ? 'is-invalid' : ''}`}
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <div className="invalid-feedback">{errors.state}</div>}
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="text"
          className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
        {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
      </div>
    </div>
  );
}

export default AddressInfo;
