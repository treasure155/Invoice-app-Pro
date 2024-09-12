import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/invoice');
  };

  return (
    <div className="landing-page d-flex flex-column align-items-start justify-content-center text-start p-4">
      <div className="text-container">
        <h1 className="mb-4">Billing Made Easy</h1>
        <p className="mb-4">
         Whether you’re a freelancer, small business owner, or part of a large enterprise, our tool helps you create professional invoices in minutes. With customizable templates, automatic calculations, and integrated payment options, you can focus more on your business and less on paperwork.
        </p>
        <Button variant="primary" size="lg" onClick={handleStart}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
