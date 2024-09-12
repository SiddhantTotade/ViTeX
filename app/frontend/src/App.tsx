import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useProfileQuery } from "./api/authApi";
import { setUserInfo } from "./redux/slice/userSlice";
import { setUserAuthentication } from "./redux/slice/authSlice";
import SuspenseLoader from "./components/common/SuspenseLoader";
import Router from "./routes";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useProfileQuery(undefined);

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setUserAuthentication({ authLoading: isLoading }));
      dispatch(setUserInfo(data));
    }
  }, [data, isLoading, dispatch]);

  if (isLoading) {
    return <SuspenseLoader />;
  }
  return (
    <>
      <Router />
    </>
  );
}

export default App;
