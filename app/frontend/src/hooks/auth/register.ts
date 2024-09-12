import type { InferType } from "yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRegisterMutation } from "../../api/authApi";
import { registrationSchema } from "../../schema/auth/registration";
import { setUserAuthentication } from "../../redux/slice/authSlice";

interface RegistrationForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
}

type RegistrationSchemaType = InferType<typeof registrationSchema>;

export const useRegister = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RegistrationSchemaType>({
    resolver: yupResolver(registrationSchema),
  });
  const [register, { isLoading, error: registerError }] = useRegisterMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data: RegistrationForm) => {
    await register(data)
      .unwrap()
      .then(() => dispatch(setUserAuthentication({ authLoading: isLoading })))
      .catch()
      .finally(reset);
  };

  return { handleSubmit, onSubmit, control, isLoading, errors, registerError };
};
