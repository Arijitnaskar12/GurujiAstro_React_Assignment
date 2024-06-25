import React from 'react';

function PersonalInfo({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Step 1: Personal Information</h3>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>
    </div>
  );
}

export default PersonalInfo;
