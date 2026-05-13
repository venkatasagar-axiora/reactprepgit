// src/pages/ErrorPage.jsx
import React from "react";

const ErrorPage = () => {
  // TEST ERROR BOUNDARY
  throw new Error("Manual page crash detected");

  return <div>Error Page</div>;
};

export default ErrorPage;