import React from "react";
import Button from "@mui/material/Button";

const AppChatBoy = ({ handleOnClick }) => {
  return (
    <>
      <Button
        variant="text"
        size="small"
        sx={{ background: "transparent", py: 0 }}
        onClick={() => {
          handleOnClick();
        }}
      >
        <img
          src="\src\assets\cart.png"
          alt={"chatbot"}
          loading="lazy"
          style={{ width: "100px", height: "150px" }}
        />
      </Button>
    </>
  );
};

export default AppChatBoy;
