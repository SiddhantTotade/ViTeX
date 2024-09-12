import { Button, CircularProgress, FormControl, Slide } from "@mui/material";
import { useLogin } from "@/hooks/auth/login";
import AuthLayout from "@/layouts/AuthLayout";
import { LoginSchemaType } from "@/hooks/auth/login";
import CustomFormController from "@/components/common/CustomFormController";

// Define fields with the correct name type
const formFields: {
  name: keyof LoginSchemaType;
  label: string;
  type: string;
}[] = [
  { name: "email", label: "Email", type: "text" },
  { name: "password", label: "Password", type: "password" },
];

export default function LoginForm() {
  const { handleSubmit, onSubmit, control, isLoading } = useLogin();

  return (
    <AuthLayout title="Login">
      <Slide direction="left" in mountOnEnter unmountOnExit>
        <FormControl
          fullWidth
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ gap: "15px" }}
        >
          {formFields.map((field) => (
            <CustomFormController
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
              type={field.type}
            />
          ))}
          <Button type="submit" variant="contained" disabled={isLoading}>
            {isLoading ? <CircularProgress size="sm" /> : "Login"}
          </Button>
        </FormControl>
      </Slide>
    </AuthLayout>
  );
}
