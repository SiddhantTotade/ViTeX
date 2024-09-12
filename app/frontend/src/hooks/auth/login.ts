import type { InferType } from "yup";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLoginMutation } from "@/api/authApi";
import { loginSchema } from "@/schema/auth/login";
import { setUserAuthentication } from "@/redux/slice/authSlice";

interface LoginForm {
  email: string;
  password: string;
}

export type LoginSchemaType = InferType<typeof loginSchema>;

export const useLogin = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(loginSchema),
  });
  const [login, { isLoading, error: loginError }] = useLoginMutation();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    await login(data)
      .unwrap()
      .then(() => {
        dispatch(setUserAuthentication({ authLoading: isLoading }));
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar(err.data.errors.non_field_errors[0], {
          variant: "error",
        });
      })
      .finally(reset);
  };

  return { handleSubmit, onSubmit, control, isLoading, errors, loginError };
};
