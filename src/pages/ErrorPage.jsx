import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Something went wrong. Please try again later.</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
