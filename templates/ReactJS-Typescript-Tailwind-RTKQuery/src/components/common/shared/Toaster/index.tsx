import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Toaster = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      draggable
    />
  );
};

export default Toaster;
