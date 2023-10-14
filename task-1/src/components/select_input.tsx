import React, { useState } from "react";
import Text, { ITextProps } from "./text";

interface IDataProps {
  key: string;
  value: string;
}

interface ISelectInputProps {
  labelTextProps?: ITextProps;
  errorTextProps?: ITextProps;
  className?: string;
  error?: string;
  label?: string;
  onChange?: (value: any) => any;
  placeholder?: string;
  value?: string;
  data?: IDataProps[];
}

const SelectInput = ({
  error,
  errorTextProps,
  className,
  labelTextProps,
  label,
  placeholder,
  value,
  onChange,
  data = [],
}: ISelectInputProps) => {
  const [currentVal, setCurrentVal] = useState("");
  return (
    <div className={className}>
      {label ? (
        <Text value={label} className="mb-2" {...labelTextProps} />
      ) : undefined}
      <select
        onChange={(e) => {
          onChange?.(e.target.value);
          setCurrentVal?.(e.target.value);
        }}
        value={currentVal || value}
        className="border border-darkInput rounded-lg focus:border-secondary block w-full p-2.5"
      >
        {[{ key: placeholder, value: placeholder }, ...data]?.map((item) => (
          <option key={item.key} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
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

export default SelectInput;
