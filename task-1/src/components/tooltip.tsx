import React, { useState } from "react";
import Text, { ITextProps } from "./text";

interface ITooltipProps {
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  tooltipContent?: any;
  tooltipComponent?: any;
  tooltipText?: string;
  tooltipTextOptions?: ITextProps;
}

const TooltipVal = ({
  direction = "right",
  className,
  tooltipContent,
  tooltipText,
  tooltipTextOptions,
  tooltipComponent,
}: ITooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipDirection =
    direction === "right"
      ? "tooltip-right"
      : direction === "left"
      ? "tooltip-left"
      : direction === "top"
      ? "tooltip-top"
      : direction === "bottom"
      ? "tooltip-bottom"
      : "tooltip-right";
  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {tooltipContent}
      <div
        className={`absolute z-10 cursor-pointer bg-darkTooltip/[0.9] p-3 w-[300px] rounded-md left-10 -top-10 ${
          showTooltip ? "visible" : "invisible"
        } ${className}`}
      >
        <div className="tooltip-arrow" data-popper-arrow></div>
        {tooltipText ? (
          <Text
            value={tooltipText}
            className="text-wheat"
            {...tooltipTextOptions}
            variant="xsmall"
          />
        ) : (
          tooltipComponent
        )}
      </div>
    </div>
  );
};

export default TooltipVal;
