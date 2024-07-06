import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const useRegister = () => {
  const navigate = useNavigate();
  const RegisterSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail/Username is required")
      .email("Invalid email format"),
    username: yup.string().required("Name is Required"),
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
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });
  function Submit(data) {
    const existingData = JSON.parse(localStorage.getItem("user")) || [];
    const emailExists = existingData.some((user) => user.email === data.email);
    if (emailExists) {
      toast.error("Email already exists");
      return;
    }
    console.log("Form Data:", data);
    const user_id = uuidv4();
    const newData = { ...data, id: user_id };
    const userRecord = [...existingData, newData];
    localStorage.setItem("user", JSON.stringify(userRecord));
    navigate("/");
    toast.success("User has been registered");
  }
  return { Submit, register, handleSubmit, errors };
};

export default useRegister;
