import React from "react";
import { useParams } from "react-router-dom";
function Success() {
  const params = useParams();
  const { name, email, concern } = params; // Access props from URL parameters
 const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Thank you for your concerns, {name}!</h1>
      <p>Your question/concern: {concern}</p>
      <p>Will be answered in 24-48 hours and sent to {email}</p>
      <div>Thank you and have a good day!</div>
      <div><button onClick={handleGoHome}>home</button></div>
    </div>
  );
}

export default Success;