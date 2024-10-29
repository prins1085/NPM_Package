import React, { useState } from "react";
import machine from "../../assets/images/machine.svg";
import logo from "../../assets/images/logo.svg";
import BGImage from "../../assets/images/background.svg";
import { MSG } from "../../common/constants/Message";
import TextField from "../../components/common/TextField";
import { TITLE } from "../../common/constants/Title";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { loginFormValidation } from "../../common/constants/Validation/validation";
import { useLoginMutation } from "../../api/auth";
import { actions } from "../../redux/store/store";
import { toast } from "react-toastify";
import { theme } from "../../styledProvider";
import TypoGraphy from "../../components/common/TypoGraphy";

const Login = (props: any) => {
  const { setStopUserQuery } = props;
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleLoginSubmit = async (values: any, action: any) => {
    const { data, error }: any = ({} = await login(values));
    if (!error) {
      setStopUserQuery(true);
      actions.auth.setCurrentUser(data?.result);
      actions.auth.setLoading(data?.isLoading);
      toast.success(data?.message);
      navigate("/dashboard");
      action.resetForm();
      return;
    }
    toast.error(error?.data?.message);
  };

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidation,
    onSubmit: (values, action) => {
      handleLoginSubmit(values, action);
    },
  });
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-no-repeat bg-top-left"
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "60%",
        backgroundPosition: "top left",
      }}
    >
      <div
        className="rounded-3xl shadow-lg flex flex-col lg:flex-row items-center w-[80vw] h-[80vh] overflow-hidden"
        style={{ background: theme.colors.secondary }}
      >
        <div className="w-full h-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center h-full gap-10">
            {" "}
            <img src={logo} alt="logo" className="w-32 lg:w-40" />
            <div>
              <TypoGraphy
                text={MSG.WELCOME}
                color={theme.colors.textT1}
                className="text-[15px] sm:text-[20px] lg:text-[28px]"
                variant="body"
                weight="semibold"
              />
              <TypoGraphy
                text={MSG.DESC}
                color={theme.colors.textT5}
                className="sm:text-[15px] text-[12px]"
                variant="body"
                weight="medium"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <TextField
                label={TITLE.EMAIL}
                name="email"
                onChange={handleChange}
                value={values.email}
                errors={errors.email && touched.email && errors.email}
                placeholder={MSG.EMAIL_ADDRESS}
              />
              <TextField
                label={TITLE.PASSWORD}
                name="password"
                type={isShowPassword ? "text" : "password"}
                onChange={handleChange}
                value={values.password}
                errors={errors.password && touched.password && errors.password}
                onIconClick={() => setIsShowPassword(!isShowPassword)}
                isIcon={true}
                open={isShowPassword}
                placeholder={MSG.PASSWORD}
              />
              <div
                className="flex justify-end font-semibold"
                style={{ color: theme.colors.primary }}
              >
                <Link to="/forgotPassword">{MSG.FORGOT_PASSWORD} </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 mt-10 rounded-lg transition"
                  style={{
                    background: theme.colors.primary,
                    color: theme.colors.secondary,
                  }}
                >
                  {TITLE.LOGIN}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden lg:block w-full lg:w-1/2 h-full p-5">
          <img
            src={machine}
            alt="machine_img"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
