import React from "react";

export interface ITextProps {
  variant?: "normal" | "title" | "large" | "xlarge" | "small" | "xsmall";
  value: string;
  className?: string;
  containerClassName?: string;
  leftIcon?: any;
  rightIcon?: any;
}

const Text = ({
  value,
  variant,
  className,
  leftIcon,
  rightIcon,
  containerClassName,
}: ITextProps) => {
  const getTextComponent = () => {
    switch (variant) {
      case "title":
        return (
          <h1 className={`text-dark ${className} text-lg md:text-xl`}>
            {value}
          </h1>
        );

      case "large":
        return (
          <h1 className={`text-dark ${className} text-2xl md:text-3xl`}>
            {value}
          </h1>
        );

      case "xlarge":
        return (
          <h1 className={`text-dark ${className} text-4xl md:text-5xl`}>
            {value}
          </h1>
        );

      case "small":
        return <p className={`text-dark ${className} text-sm`}>{value}</p>;

      case "xsmall":
        return <p className={`text-dark ${className} text-xs`}>{value}</p>;

      default:
        return <p className={`text-dark ${className} text-base`}>{value}</p>;
    }
  };

  return (
    <div
      className={`flex justify-start items-center w-fit ${containerClassName}`}
    >
      {leftIcon ? <span className="mr-2">{leftIcon}</span> : undefined}
      {getTextComponent()}
      {rightIcon ? <span className="ml-2">{rightIcon}</span> : undefined}
    </div>
  );
};

export default Text;
