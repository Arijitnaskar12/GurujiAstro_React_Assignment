import React from 'react';

function FormNavigation({ step, handleBack, handleNext }) {
  return (
    <div className="d-flex justify-content-between mt-4">
      <button
        className="btn btn-secondary"
        onClick={handleBack}
        disabled={step === 1}
      >
        Back
      </button>
      {step < 3 ? (
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      ) : (
        <button className="btn btn-success" onClick={() => alert('Form Submitted')}>
          Submit
        </button>
      )}
    </div>
  );
}

export default FormNavigation;
