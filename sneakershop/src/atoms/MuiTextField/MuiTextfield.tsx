import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type textfield = {
  placeholder: string;
  label: string;
  type: string;
};

const MuiTextField = ({ placeholder, label , type}: textfield) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-basic"
        variant="filled"
        placeholder={placeholder}
        label={label}
        type={type}
      />
    </Box>
  );
};

export default MuiTextField;
