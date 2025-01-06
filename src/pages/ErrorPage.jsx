import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Something went wrong. Please try again later.</p>
      {/* This <Link/> element checks for the given to="" values and checks the router automatically
      and takes us to the page. Works only when given inside a component that is present in createBrowserRouter config */}
      <Link to="/aura-apparel">Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
