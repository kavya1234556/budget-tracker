import React from "react";
import img from "../../../images/img.jpg";
import InputPassword from "../../../components/input-password";
import useRegister from "./hooks/useRegister";

const RegisterPage = () => {
  const { Submit, register, handleSubmit, errors } = useRegister();
  return (
    <div className="flex h-screen items-center">
      <div className="flex w-[80%] h-[90%] justify-center shadow-md mx-auto">
        <div
          className="relative"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "50%",
            height: "100%",
          }}
        >
          <div className="absolute text-3xl font-bold text-center transform rotate-x-12 text-white top-[325px] left-[20px]">
            Illuminate Your Mind: Discover, Share, Inspire
          </div>
        </div>
        <div className="bg-white rounded shadow-md w-[50%] p-4">
          <h1 className="text-2xl font-semibold text-center">Register</h1>
          <h4 className="text-xs text-gray-600 mb-4 text-center">
            Please enter your details
          </h4>
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
            <div className="mt-[48px]">
              <input
                {...register("username")}
                type="text"
                placeholder="Name"
                className="outline-none text-black border-b border-solid border-blue2 py-[8px] w-full text-[16px] placeholder:text-gray1 font-light"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username.message}
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
            <div>
              <div className="flex justify-center mt-[30px]">
                <button type="submit" className="text-white bg-black p-[9px]">
                  Register
                </button>
              </div>
            </div>
          </form>
          <div className="mt-4 flex justify-center text-xs font-semibold items-center">
            Already have an account?
            <a href="/" className="hover:border-b-2 ml-1 hover:border-black">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
