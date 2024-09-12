import { useState, InputHTMLAttributes } from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import {
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  SxProps,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { red } from "@mui/material/colors";

// Define interface with generics and correct typing for the name prop
interface InputProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: Path<T>; // Correct type for name
  label?: string;
  placeholder?: string;
  type: string;
  size?: "small" | "medium"; // Custom size prop
  rows?: string;
  multiline?: boolean;
  error?: boolean;
  outsideValue?: number | string; // Ensure the value type is flexible
  defaultOutsideValue?: string;
  control: Control<T>; // Correctly type the control prop
  sx?: SxProps;
  disabled?: boolean;
}

export default function CustomFormController<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  rows,
  multiline,
  outsideValue,
  defaultOutsideValue,
  type,
  size = "medium", // Default size
  sx,
  disabled,
}: InputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Controller
      name={name} // `name` now correctly typed as Path<T>
      control={control}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => (
        <TextField
          InputProps={
            type === "password"
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                        color="primary"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : undefined
          }
          fullWidth
          variant="outlined"
          label={label || ""}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          type={showPassword ? "text" : type}
          size={size}
          sx={sx}
          disabled={disabled}
          value={outsideValue ?? value} // Use nullish coalescing to handle undefined or null
          defaultValue={defaultOutsideValue}
          onChange={onChange}
          error={!!error}
          helperText={
            error ? (
              <Typography
                variant="caption"
                component="span"
                sx={{
                  color:
                    localStorage.getItem("themeMode") === "light"
                      ? red[900]
                      : "#fff",
                }}
              >
                {error.message}
              </Typography>
            ) : null
          }
        />
      )}
    />
  );
}
