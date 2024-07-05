import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useLogin = () => {
  const navigate = useNavigate();
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
    const userDetail = loggedUsers.filter((item) => item.email == data.email);
    userDetail.map((item) => {
      if (item.email == data.email && item.password == data.password) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("user_id", item.id);

        navigate("/dashboard");
      }
    });
  };
  return { register, handleSubmit, Submit, errors };
};

export default useLogin;