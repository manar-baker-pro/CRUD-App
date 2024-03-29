import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-center">
        <h1 className="text-2xl font-semibold">Oops!</h1>
        <p className="text-gray-600 mt-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-600">
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
          onClick={() => navigate("/", { replace: true })}
        >
          Link
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
