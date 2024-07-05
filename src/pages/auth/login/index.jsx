import React from "react";
import InputPassword from "../../../components/input-password";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(12, "Password must be up to 12 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const Submit = (data) => {
    const loggedUsers = JSON.parse(localStorage.getItem("user")) || [];
    if (
      loggedUsers.email == data.email &&
      loggedUsers.password == data.password
    ) {
      localStorage.setItem("loggedIn", true);
      navigate("/dashboard");
    }
  };

  return (
    <main className="flex items-center justify-around h-screen bg-black">
      <div>
        <p className="text-white ">
          <span className="font-medium text-[24px]"> Welcome to</span>
          <br />
          <span className="font-semibold text-[36px]">Budget Tracker</span>
        </p>
      </div>
      <div className="bg-white px-[32px] pt-[32px] pb-[52px]">
        <h2 className="text-black text-[20px] font-semibold ">Login</h2>
        <p className="text-gray1 text-[14px] font-light whitespace-nowrap mr-[44px]">
          Login with your email & password
        </p>
        <form onSubmit={handleSubmit(Submit)} autoComplete="off">
          <div className="mt-[48px]">
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="outline-none text-black border-b border-solid border-blue2 py-[8px] w-full text-[16px] placeholder:text-gray1 font-light"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative mt-[34px]">
            <InputPassword register={register("password")} />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <p className="text-black text-right text-[8px]">
            Click Here to{" "}
            <span
              className="underline text-[#06b6d4] cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register!
            </span>
          </p>
          <div>
            <div className="flex justify-center mt-[30px]">
              <button type="submit" className="text-white bg-black p-[9px]">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
