import React from 'react';

function Confirmation({ formData }) {
  return (
    <div>
      <h3>Step 3: Confirmation</h3>
      <ul className="list-group">
        <li className="list-group-item"><strong>Name:</strong> {formData.name}</li>
        <li className="list-group-item"><strong>Email:</strong> {formData.email}</li>
        <li className="list-group-item"><strong>Phone:</strong> {formData.phone}</li>
        <li className="list-group-item"><strong>Address Line 1:</strong> {formData.address1}</li>
        <li className="list-group-item"><strong>Address Line 2:</strong> {formData.address2}</li>
        <li className="list-group-item"><strong>City:</strong> {formData.city}</li>
        <li className="list-group-item"><strong>State:</strong> {formData.state}</li>
        <li className="list-group-item"><strong>Zip Code:</strong> {formData.zip}</li>
      </ul>
    </div>
  );
}

export default Confirmation;
