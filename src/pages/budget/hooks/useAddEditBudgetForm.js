import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const useAddEditBudgetForm = () => {
  const { id } = useParams();
  console.log("🚀 ~ useAddEditBudgetForm ~ id:", id);
  const navigate = useNavigate();
  const Schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    amount: yup
      .number()
      .required("Amount is required")
      .positive("Amount must be positive"),
    date: yup.date().required("Date is required").typeError("Invalid date"),
    type: yup
      .string()
      .oneOf(["income", "expense"], "Invalid type")
      .required("Type is required"),
    reoccurring: yup
      .string()
      .oneOf(["one-time", "monthly"], "Invalid reoccurring option")
      .required("Reoccurring is required"),
    category: yup.string().required("Category is required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      name: "",
      amount: "",
      date: "",
      type: "",
      reoccurring: "",
      category: "",
    },
  });

  useEffect(() => {
    if (id) {
      const data = JSON.parse(localStorage.getItem("budgetData")) || [];
      const filteredData = data.find((item) => item.id === id);
      if (filteredData) {
        setValue("name", filteredData.name);
        setValue("amount", filteredData.amount);
        setValue("date", filteredData.date);
        setValue("type", filteredData.type);
        setValue("reoccurring", filteredData.reoccurring);
        setValue("category", filteredData.category);
      }
    }
  }, [id, setValue]);

  const Submit = (data) => {
    const user_id = localStorage.getItem("user_id");
    console.log("🚀 ~ Submit ~ user_id:", user_id);
    const existingData = JSON.parse(localStorage.getItem("budgetData")) || [];
    if (id) {
      const updatedData = existingData.map((item) =>
        item.id === id
          ? { ...item, ...data, id: item.id, userId: user_id }
          : item
      );
      localStorage.setItem("budgetData", JSON.stringify(updatedData));
    } else {
      const Id = uuidv4();
      const recordWithId = { ...data, id: Id, userId: user_id };
      const updatedData = [...existingData, recordWithId];
      localStorage.setItem("budgetData", JSON.stringify(updatedData));
    }
    navigate("/budget");
  };

  return { register, handleSubmit, Submit, errors };
};

export default useAddEditBudgetForm;
