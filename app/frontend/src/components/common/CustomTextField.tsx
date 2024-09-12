import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

type Props = TextFieldProps & {
  label: string;
  type?: string; // Allow type prop
  error?: boolean;
  helperText?: string;
};

const CustomTextField = React.forwardRef<HTMLDivElement, Props>(
  function CustomTextField(
    { label, type = "text", error, helperText, ...field },
    ref
  ) {
    return (
      <TextField
        {...field}
        label={label}
        type={type} // Set the type for input
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!error}
        helperText={error ? helperText : ""}
        ref={ref}
      />
    );
  }
);

export default CustomTextField;
