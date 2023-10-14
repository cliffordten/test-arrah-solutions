import React, { HTMLInputTypeAttribute, useState } from "react";
import Text, { ITextProps } from "./text";

interface IInputProps {
  labelTextProps?: ITextProps;
  errorTextProps?: ITextProps;
  className?: string;
  error?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (value: any) => any;
  placeholder?: string;
  value?: string;
}

const Input = ({
  error,
  errorTextProps,
  className,
  labelTextProps,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: IInputProps) => {
  const [currentVal, setCurrentVal] = useState("");
  return (
    <div className={className}>
      {label ? (
        <Text value={label} className="mb-2" {...labelTextProps} />
      ) : undefined}
      <input
        onChange={(e) => {
          onChange?.(e.target.value);
          setCurrentVal?.(e.target.value);
        }}
        type={type}
        value={currentVal || value}
        className="border border-darkInput rounded-lg focus:border-secondary block w-full p-2.5"
        placeholder={placeholder}
      />
      {error ? (
        <Text
          className="text-red-500"
          value={error}
          variant="small"
          {...errorTextProps}
        />
      ) : undefined}
    </div>
  );
};

export default Input;
