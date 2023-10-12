import React from "react";
import Text, { ITextProps } from "./text";

interface IButtonProps {
  textProps: ITextProps;
  className?: string;
  onClick?: () => void;
}

const Button = ({ textProps, className, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primaryLight100 rounded-lg py-2 px-6 ${className}`}
    >
      <Text className="text-white" {...textProps} />
    </button>
  );
};

export default Button;
