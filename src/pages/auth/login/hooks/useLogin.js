import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";

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
    const loggedInUser = loggedUsers.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (loggedInUser) {
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("user_id", loggedInUser.id);
      toast.success("Logged In successfully");
      navigate("/budget");
    } else {
      toast.error("Invalid Email or Password");
    }
  };
  return { register, handleSubmit, Submit, errors };
};

export default useLogin;
