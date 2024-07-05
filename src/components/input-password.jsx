import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputPassword = ({ register }) => {
  const [hidden, setHidden] = useState(true);

  function toggleInputType() {
    setHidden((prev) => !prev);
  }

  return (
    <div className="relative">
      <input
        {...register}
        type={hidden ? "password" : "text"}
        placeholder="Password"
        className="outline-none text-black border-b  border-solid border-blue2 py-[8px] w-full text-[16px] placeholder:text-gray1 font-light leading-[24px]"
      />
      <button
        type="button"
        className="absolute right-0 -translate-y-1/2 shrink-0 top-1/2 "
        onClick={toggleInputType}
      >
        {hidden ? (
          <AiOutlineEyeInvisible fontSize={26} />
        ) : (
          <AiOutlineEye fontSize={26} />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
