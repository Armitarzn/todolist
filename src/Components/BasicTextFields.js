import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function BasicTextFields({ label, value, setValue }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        id="outlined-basic"
        value={value}
        label={label}
        variant="outlined"
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
}

export default BasicTextFields;
