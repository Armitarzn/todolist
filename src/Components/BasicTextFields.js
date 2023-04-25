import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function BasicTextFields({ label, value, setValue, width = "25ch", border }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: width },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        value={value}
        label={label}
        variant="outlined"
        onChange={(event) => setValue(event.target.value)}
      />
    </Box>
  );
}

export default BasicTextFields;
