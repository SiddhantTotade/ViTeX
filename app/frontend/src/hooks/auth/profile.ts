import { useDispatch } from "react-redux";
import { useProfileQuery } from "@/api/authApi";
import { setUserInfo } from "@/redux/slice/userSlice";
import { setUserAuthentication } from "@/redux/slice/authSlice";

export const useProfile = () => {
  const { data, isLoading } = useProfileQuery(undefined);
  const dispatch = useDispatch();

  dispatch(setUserInfo(data));
  dispatch(setUserAuthentication({ authLoading: isLoading }));
};
