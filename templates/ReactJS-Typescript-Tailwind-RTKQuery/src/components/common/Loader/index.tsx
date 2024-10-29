import React from "react";
import { useSelector } from "react-redux";

const Spinner = () => {
  const isLoading = useSelector((state: any) => state.auth.isLoading);

  const styles = {
    margin: "auto",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
  };

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#817e8152",
          top: 0,
        }}
      >
        {isLoading && <div>Loading...</div>}
      </div>
    );
  } else {
    return null;
  }
};

export default Spinner;
