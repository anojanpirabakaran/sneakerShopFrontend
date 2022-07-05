import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

type textfield = {
  placeholder: string;
  label: string;
  type: string;
  onChange?: (e: any) => void;
};

const MuiTextField = ({ placeholder, label, type, onChange }: textfield) => {
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
        onChange={() => {}}
      />
    </Box>
  );
};

export default MuiTextField;
