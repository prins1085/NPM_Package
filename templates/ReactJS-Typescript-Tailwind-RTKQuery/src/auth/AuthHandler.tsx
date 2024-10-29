import { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { TITLE } from "../common/constants/Title";
import { useSelector } from "react-redux";

const AuthHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const token = Cookies.get(TITLE.TOKEN);
  const currentUser = useSelector((state: any) => state.auth.currentUser);
  const isLoading = useSelector((state: any) => state.auth.isLoading);

  useEffect(() => {
    if (!!token) return;
    if (
      (!token || (!currentUser && isLoading === false)) &&
      !pathname.includes("/forgotPassword")
    ) {
      navigate("/login");
    }
  }, [currentUser, isLoading]);

  return null;
};

export default AuthHandler;
